const express = require("express");
const multer = require("multer");

const app = express();

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "uploads");
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/", fileUpload, (req, resp) => {
  resp.send("File uploaded");
});

app.listen(5000);
