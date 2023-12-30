const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose.connect("mongodb://localhost:27017/e-comm");

let productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});
let collection = mongoose.model("products", productSchema);

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  let data = await collection.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.listen(5000);
