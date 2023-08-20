import express from "express";
import path from "path";
const app = express();
// app.get("/", (req, res) => {
//   // res.json({
//   //   success: true,
//   //   products: [],
//   // });
//   // res.send("Hi");
//   const pathlocation = path.resolve();
//   res.sendFile(path.join(pathlocation, "./index.html"));
// });
express.static("./public");
app.set("view engine", "ejs");
app.get("/", (req, res)=>{
  res.render("index", {name: "Dev"});
})
app.listen(5000, () => {
  console.log(" Server is Working");
});
