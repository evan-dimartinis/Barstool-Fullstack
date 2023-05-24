const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://guest:guestmongo1@barstoolchallenge.hrqrjdq.mongodb.net/?retryWrites=true&w=majority";

let client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

let clientPromise = client.connect();

module.exports = clientPromise;
