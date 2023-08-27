const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1/";
const database = "e-comm";
const client = new MongoClient(url);

// async function getData() {
//   let result = await client.connect();
//   db = result.db(database);
//   collection = db.collection("products");
//   let data = await collection.find({}).toArray();
//   console.log(data);
// }
// $ git config --global user.name "Deo Raj"
// $ git config --global user.email d.jrajsingh81@gmail.com
// Getting a Specific result
async function getData() {
  let result = await client.connect();
  db = result.db(database);
  collection = db.collection("products");
  let data = await collection.find({name: 'poco c3'}).toArray();
  console.log(data);
}
getData();
