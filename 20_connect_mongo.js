const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dataBaseName = 'e-comm';

let getData = async ()=>{
    let result = await client.connect();
    db = result.db(dataBaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray(); 
    console.log(data);
}
getData();