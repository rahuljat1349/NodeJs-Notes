const fs = require('fs');

const path = require('path');

const dirPath = path.join(__dirname, "files");
const filePath = `${dirPath}/apple.txt`;

// Creating file
// fs.writeFile(filePath,'This is simple text',()=>{
//     console.log("written");
// });
// or (blocking)
// fs.writeFileSync(filePath,'This is simple text');

// Reading file
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// });

// or a shorter way is ..(it also blocks thread)
// const a = fs.readFileSync(filePath);
// console.log(a.toString());


// Updating file
// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//     if (!err) {
//         console.log('File is updated');
//     };
// });

// Rename file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log('File name updated');
//     };
// });

// Deleting file
// fs.unlinkSync(`${dirPath}/fruit.txt`)