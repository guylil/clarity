const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const employees = require("./employees/employees");

app.use(`/employees`, employees);

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
