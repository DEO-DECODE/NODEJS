const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1/e-comm");
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });
  const productsModel = mongoose.model("products", productSchema);
  let data = new productsModel({ name: "m 10", price: 1000 });
  let result = await data.save();
  console.log(result);
};
main();
