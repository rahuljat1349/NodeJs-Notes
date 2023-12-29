const dbConnect = require('./mongodb');
const express = require('express');
const mongodb = require('mongodb')

const app = express();

app.use(express.json());

app.delete('/:id',async(req,resp)=>{
    let collection  = await dbConnect();
    let result = await collection.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    resp.send(result);
    console.log(result);
});

app.listen(5000);
