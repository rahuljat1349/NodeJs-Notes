const dbConnect = require("./mongodb");

let updateData = (async () => {
    let collection = await dbConnect();
    let result = await collection.updateOne(
        { name: "k 20" },
        { $set: { name: "note 6" } }
    );
    if (result.acknowledged) {
        console.log("Data updated");

    };
})();