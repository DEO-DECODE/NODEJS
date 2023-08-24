const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1/";
const database = "e-comm";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  db = result.db(database);
  collection = db.collection("products");
  let data = await collection.find({}).toArray();
  console.log(data);
}

getData();
