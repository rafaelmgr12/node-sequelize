const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;