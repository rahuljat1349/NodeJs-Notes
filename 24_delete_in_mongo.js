const dbConnect = require("./mongodb");

let deleteData = async () => {
    let collection = await dbConnect();
    let result = await collection.deleteOne(
        { name: "iphone 12" }
    );
    if (result.acknowledged) {
        console.log("Data deleted");
    };
};
deleteData();