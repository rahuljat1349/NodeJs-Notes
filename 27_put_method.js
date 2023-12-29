const dbConnect = require('./mongodb');
const express = require('express');

const app = express();

app.use(express.json());

app.put('/:name',async(req,resp)=>{
    let collection = await dbConnect();
    let filter = req.params.name;
    let data = req.body;
    let result = await collection.updateOne({name:filter},{$set:data});
    if (result.acknowledged) {
        console.log("Data updated");
        resp.send("Data updated");
    };
});

app.listen(5000);