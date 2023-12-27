const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dataBaseName = 'e-comm';

let dbConnect = async () => {
    let result = await client.connect();
    db = result.db(dataBaseName);
    return db.collection('products');

};

// dbConnect().then((data) => {
//     data.find().toArray().then((result) => {
//         console.log(result);
//     })
// });

module.exports = dbConnect;