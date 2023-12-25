const express = require('express');
const path = require('path');

const app = express();

const dirName = path.join(__dirname,'public')

app.use(express.static(dirName));


app.listen(5000);