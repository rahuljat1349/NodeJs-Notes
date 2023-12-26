const express = require('express');
const app = express();

const reqFiter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age");
    }
    else if (req.query.age < 18) {
        resp.send("You are not above eighteen");
    }
    else {
        next();
    };
};

app.use(reqFiter);
app.get('/', (req, resp) => {
    resp.send("Home page");
});
app.get('/users', (req, resp) => {
    resp.send("Users page");
});

app.listen(5000);