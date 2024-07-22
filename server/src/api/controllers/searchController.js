const { Op } = require('sequelize');
const Employee = require('../models/employee'); // Adjust path as needed

exports.searchEmployee = async (req, res) => {
  try {
    const { query } = req.query;

    // Check if the query parameter is provided
    if (!query) {
      return res.status(400).json({ error: "Query is required." });
    }

    // Search employees based on multiple fields
    const employees = await Employee.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
          { mobile: { [Op.iLike]: `%${query}%` } },
          { designation: { [Op.iLike]: `%${query}%` } },
          { gender: { [Op.iLike]: `%${query}%` } },
          { course: { [Op.iLike]: `%${query}%` } }
        ]
      }
    });

    // Check if any employees are found
    if (employees.length === 0) {
      return res.status(404).json({ error: "No employees found." });
    }

    // Respond with the found employees
    res.status(200).json({ employees });
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Server error" });
  }
};
