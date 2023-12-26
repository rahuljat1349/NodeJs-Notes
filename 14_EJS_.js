const express = require("express");

const app = express();

const path = require('path');
const dirPath = path.join(__dirname, "public")


app.set("view engine", "ejs");


app.get("/profile", (_, resp) => {
    const user = {
        name: "Peter",
        email: "peter@test.com",
        country: "USA"
    };
    resp.render("profile", {user});
});


app.listen(5000);