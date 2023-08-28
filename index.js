const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1/";
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("products");
  // let data = await collection.find({name: 'poco c3'}).toArray();
  // console.log(data);
}
dbConnect().then((resp)=>{
  resp.find({name: 'poco c3'}).toArray().then((data)=>{
    console.warn(data);
  })
})
