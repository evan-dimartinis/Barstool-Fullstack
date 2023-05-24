const NBAData = require("../frontend/src/models/nba-data");
const IncrementNBAData = require("./NBAhelpers");
const clientPromise = require("./db");

const getLatestNBAScore = async () => {
  const client = await clientPromise;

  const db = client.db("NBADataCache");
  const collection = db.collection("Cache");
  let results = await collection
    .find({})
    .sort({ _id: -1 })
    .limit(1)
    .toArray()
    .catch((err) => {
        throw new Error('Error retreiving cache data')
    });
  let doc = results[0];
  const LastRefreshed = new Date(doc.timestamp);
  if (Date.now() - 15000 < LastRefreshed) {
    return {
      data: doc,
      msg: `returning cached data, current time = ${Date.now().toString()}, Last updated: ${LastRefreshed.toString()}`,
    };
  } else {
    let nbadata = IncrementNBAData(doc);
    nbadata.timestamp = Date.now();
    nbadata._id = null;
    collection.insertOne(nbadata);
    return {
      data: nbadata,
      msg: "returning newly fetched data",
    };
  }
};

module.exports = getLatestNBAScore
