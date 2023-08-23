const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
app.set("view engine", "ejs");
// app.use(express.static(publicPath));
app.get("", (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

// app.get("/contact", (_, resp) => {
//   resp.sendFile(`${publicPath}/about.html`);
// });

// app.get("/help", (_, resp) => {
//   resp.sendFile(`${publicPath}/help.html`);
// });

// app.get("*", (_, resp) => {
//   resp.sendFile(`${publicPath}/nopage.html`);
// });

app.get("/profile", (_, resp) => {
  const user = {
    name: "Dev Raj",
    email: "d.jrajsingh81@gmail.com",
    city: "Jamui",
  };
  resp.render('profile', {user});
});
app.listen(5000);
