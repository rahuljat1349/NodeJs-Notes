const express = require("express");

const app = express();

const path = require('path');
const dirPath = path.join(__dirname,"public")

app.get("", (_, resp) => {
    resp.sendFile(`${dirPath}/index.html`);
});
app.get("/about", (_, resp) => {
    resp.sendFile(`${dirPath}/about.html`);
});
app.get("/contact", (_, resp) => {
    resp.sendFile(`${dirPath}/contact.html`);
});

app.listen(5000);

// now we have removed .html from url


// apply 404 page
app.get("*", (_, resp) => {
    resp.sendFile(`${dirPath}/404page.html`);
});


