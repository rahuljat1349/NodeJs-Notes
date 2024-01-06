const express = require("express");
const EventEmitter = require("events");

const event = new EventEmitter();
const app = express();

let count = 0;

event.on("APIrequest", () => {
  count++;
  console.log("API request count is :" + count);
});

app
  .route("/")
  .get((req, resp) => {
    resp.send("You requested");
    event.emit("APIrequest");
  })
  .put((req, resp) => {
    resp.send("You requested");
    event.emit("APIrequest");
  })
  .post((req, resp) => {
    resp.send("You requested");
    event.emit("APIrequest");
  });

app.listen(5000);
