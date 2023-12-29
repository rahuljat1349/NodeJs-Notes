const dbConnect = require("./mongodb");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/", async (req, resp) => {
  let collection = await dbConnect();
  let data = req.body;
  result = await collection.insertOne(data);
  if (result.acknowledged) {
      console.log("Data added");
      resp.send("data added");
  };
});


app.listen(5000);
