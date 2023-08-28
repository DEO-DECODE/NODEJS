const dbConnect = require("./mongodb");
const express = require("express");
const app = express();
const mongodb = require("mongodb");
app.use(express.json());
app.get("/", async (res, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  if (result.acknowledged) {
    console.log("Data Inserted");
  }
  resp.send(result);
});

app.put("/:name", async (req, resp) => {
  const data = await dbConnect();
  let result = data.updateOne({ name: req.params.name }, { $set: req.body });
  resp.send(result.acknowledged);
});
app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});
app.listen(5000);
