const express = require("express");
const router = express.Router();

let employees = [];

const onlyCharsRegex = /[^a-zA-Z ]/g;

router.use((req, res, next) => {
  next();
});

router.get("/all", (req, res) => {
  res.json(employees);
});

router.post("/add", (req, res) => {
  const newEmployeeData = req.body;

  let name, age;

  if (newEmployeeData.name) {
    name = newEmployeeData.name.replace(onlyCharsRegex, "");
  }
  if (!!Number(newEmployeeData.age) && newEmployeeData.age) {
    age = newEmployeeData.age.replace(/^0-100/g, "");
    age = Number(age);
  }
  const newEmployee = { name, age };
  employees.push(newEmployee);
  res.json(employees);
});

module.exports = router;
