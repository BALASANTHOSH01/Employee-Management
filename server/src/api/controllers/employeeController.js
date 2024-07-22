const Employee = require("../models/employee"); // employee model

// Create Employee
exports.createEmployee = async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course, image } = req.body;

    // validate all fields are present
    if (!name || !email || !mobile || !designation || !gender || !course || !image) {
      return res.status(400).json({ message: "Please fill all the fields" });
    };

    // create employee
    const employee = await Employee.create({ name, email, mobile, designation, gender, course, image });

    // send response to the client
    res.status(201).json({ message: "Employee created successfully", employee });

  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Employee List
exports.getEmployeeList = async (req, res) => {
  try {

    // Find all employee from the Db
    const employees = await Employee.findAll();

    // send 'error' if no employees
    if(!employees){
        return res.status(404).send("No employees are exist.");
    }

    // send response to the client
    res.status(200).json({ employees });
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Update the Employee by using 'email'
exports.updateEmployee = async (req, res) => {
  try {
    // get the email from client
    const { email } = req.params;

    // get updated value from 'request-body'
    const { name, mobile, designation, gender, course, image } = req.body;
    const employee = await Employee.findOne({ where: { email } });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // update the value if updated or keep it same
    employee.name = name || employee.name;
    employee.mobile = mobile || employee.mobile;
    employee.designation = designation || employee.designation;
    employee.gender = gender || employee.gender;
    employee.course = course || employee.course;
    employee.image = image || employee.image;

    // save the updated values
    await employee.save();

    // send response to the client
    res.status(200).json({ message: "Employee updated successfully", employee });
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Server error" });
  }
};
