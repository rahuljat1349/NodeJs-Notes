const dbConnect = require('./mongodb');


const main = (async ()=>{
    let collection = await dbConnect();
    data = await collection.find().toArray();
    console.log(data);
})();

