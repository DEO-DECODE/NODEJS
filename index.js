const express = require("express");
const multer = require("multer");
const app = express();
// Middleware
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("file_name");
app.post("/upload", upload, (req, resp) => {
  resp.send("File Uploaded");
});
app.listen(5000);
