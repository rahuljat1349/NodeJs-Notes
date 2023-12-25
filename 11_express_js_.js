const express = require("express");

const app = express();

app.get("",(req,resp)=>{
    resp.send("Welcome, this is home page");
});
app.get("/about",(req,resp)=>{
    resp.send("Welcome, this is about page");
});
app.get("/contact",(req,resp)=>{
    resp.send("Welcome, this is contact page");
});

app.listen(5000);