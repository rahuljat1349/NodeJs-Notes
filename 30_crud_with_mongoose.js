const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/e-comm";

mongoose.connect(url);
const collecSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});
const collec = mongoose.model("products", collecSchema);




// saving in database

const SaveInDB = async () => {
  let data = new collec({ name: "pixel 3", brand: "google", price: 250 });
  let result = await data.save();
  console.log(result);
};
// SaveInDB();

// Updating in database

const UpdateInDB = async () => {
  let result = await collec.updateOne(
    { name: "pixel 3" },
    { $set: { price: 320 } }
  );
  console.log(result);
};
// UpdateInDB();

// Delete in Database

const DeleteInDB = async()=>{
    let result = await collec.deleteOne({
        name:"pixel 3"
    });
    console.log(result);
};
// DeleteInDB();

// Find in Database

const FindInDB = async () => {
  let result = await collec.find({});
  console.log(result);
};
FindInDB();