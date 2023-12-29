const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/e-comm";

mongoose.connect(url);
const collecSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

// saving in database

const main = async () => {
  const collec = mongoose.model("products", collecSchema);
  let data = new collec({ name: "pixel 3", brand: "google", price: 250 });
  let result = await data.save();
  console.log(result);
};
