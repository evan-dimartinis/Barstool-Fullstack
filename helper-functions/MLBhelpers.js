const clientPromise = require("./db");
const fs = require('fs')
const x = require('../frontend/src/models/MLB-data.json')

const fetchMLBData = () => {
  return x
};

const updateMLBData = async () => {
  const client = await clientPromise;

  const db = client.db("MLBDataCache");
  const collection = db.collection("Cache");
  let results = await collection
    .find({})
    .sort({ _id: -1 })
    .limit(1)
    .toArray()
    .catch((err) => {
      throw new Error("Error retreiving cache data");
    });

  let doc = results[0];
  const LastRefreshed = new Date(doc.timestamp);
  if (Date.now() - 15000 < LastRefreshed) {
    return {
      data: doc,
      msg: `returning cached data, current time = ${Date.now().toString()}, Last updated: ${LastRefreshed.toString()}`,
    };
  } else {
    let mlbdata = fetchMLBData();
    mlbdata.timestamp = Date.now();
    mlbdata._id = null;
    collection.insertOne(mlbdata);
    return {
      data: mlbdata,
      msg: "returning newly fetched data",
    };
  }
};

module.exports = updateMLBData