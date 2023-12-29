const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

app.get('/',async(req,resp)=>{
    let collection = await dbConnect();
    let data = await collection.find().toArray();
    resp.send(data);
});

app.listen(5000);