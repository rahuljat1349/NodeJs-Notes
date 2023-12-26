const express = require('express');
const app = express();

const reqFiter = require('./middleware')

// app.use(reqFiter);
app.get('/', (req, resp) => {
    resp.send("Home page");
});
// sigle route middleware
app.get('/users',reqFiter, (req, resp) => {
    resp.send("Users page");
});

// for a grouped middleware routs
const route = express.Router();
route.use(reqFiter)
route.get('/contact', (req, resp) => {
    resp.send("contact page");
});
app.use('/',route);




app.listen(5000);