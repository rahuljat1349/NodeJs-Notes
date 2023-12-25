// console.log(process);

const fs = require('fs');

const input = process.argv;

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
} else {
    console.log('Invalid Input');
};

// fs.writeFileSync(input[2], input[3]);

// cmd should be like- node (file_name) new.txt 'this is a sample text'