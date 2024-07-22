const express = require("express");
const { createEmployee, getEmployeeList, updateEmployee } = require("../controllers/employeeController");
const { searchEmployee } = require("../controllers/searchController");
const router = express.Router();

router.post("/create-employee", createEmployee);
router.get("/employee-list", getEmployeeList);
router.patch("/:email", updateEmployee);
router.get("/search",searchEmployee);
module.exports = router;
