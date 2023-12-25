const fs = require('fs');
const path = require('path');
// getting path
const dirPath = path.join(__dirname,'files');
// creating multiple files
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/Hello${i}.txt`,`this is a sample text ${i}`);    
// };

// reading files
fs.readdir(dirPath,(err, files)=>{
    console.log(files);
});
// it will give an array 

//instead, we can do this
fs.readdir(dirPath,(err, files)=>{
    files.forEach((item)=>{
        console.log(`This is ${item}`);
    });
});