const dbConnect = require("./mongodb");

let insertData = (async () => {
    let collection = await dbConnect();
    let result = await collection.insertMany(
        [
            { name: "nord", brand: "oneplus", price: 180 },
            { name: "max 5", brand: "micromax", price: 80 },
            { name: "moto 20", brand: "onmotorola", price: 200 },
            { name: "k 20", brand: "redmi", price: 220 },

        ]
    );
    if (result.acknowledged) {
        console.log("Data Inserted Successfully");
    }
})();