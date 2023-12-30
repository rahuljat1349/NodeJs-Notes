// Configuration
const mongoose = require("mongoose");
const express = require("express");
let url = "mongodb://localhost:27017/e-comm";
const app = express();

mongoose.connect(url);

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

const collection = mongoose.model("products", productSchema);

//
//
//
app.use(express.json());

// app.post('/',async (req,resp)=>{
//     let data = new collection(req.body);
//     let result = await data.save();
//     resp.send(result)
// });

// app.put("/:_id", async (req, resp) => {
//   let newData = req.body;
//   let result = await collection.updateOne(req.params, { $set: newData });
//   resp.send(result);
// });

// app.get('/',async (req,resp)=>{
//     let result = await collection.find();
//     resp.send(result)
// });

// app.delete("/:_id", async (req, resp) => {
//   let result = await collection.deleteOne(req.params);
//   resp.send(result);
// });

// app.listen(5000);

