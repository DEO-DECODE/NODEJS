const express = require("express");
const app = express();
const route = express.Router();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please provide your age");
  } else if (req.query.age < 18) {
    resp.send("You are under aged");
  } else {
    next();
  }
};

route.use(reqFilter);
// app.use(reqFilter);

app.get("/", (res, resp) => {
  resp.send("Welcome to Home page");
});

app.get("/users", (res, resp) => {
  resp.send("Welcome to Users page");
});

route.get("/about", (res, resp) => {
  resp.send("Welcome to About page");
});
route.get("/contact", (res, resp) => {
  resp.send("Welcome to contact page");
});

app.use("/", route);

app.listen(5000);
