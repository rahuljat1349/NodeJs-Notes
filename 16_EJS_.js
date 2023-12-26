const express = require("express");

const app = express();

const path = require('path');
const dirPath = path.join(__dirname, "public")


app.set("view engine", "ejs");


app.get("/profile", (_, resp) => {
    const user = {
        name: "Peter",
        email: "peter@test.com",
        country: "USA",
        skills:['JavaScript','Python','C/C++','Java','Ruby']
    };
    resp.render("profile", { user });
});

app.get("/login",(_,resp)=>{
    resp.render("login")
})

app.listen(5000);