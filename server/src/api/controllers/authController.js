const Admin = require("../models/admin");
const { hashPassword, checkPassword } = require("../utils/passwordHandler");

// Register Admin
exports.createAdmin = async (req, res) => {
    try {
        // Get admin data from client
        const { name, email, password, mobile } = req.body;

        const requestData = req.body;

        Object.values(requestData).map((data)=>{
            console.log("data :"+data);
        }); 

        // Validate the data
        if (!name || !email || !password || !mobile) {
            return res.status(400).json({ error: "Please fill all the fields" });
        };

        // Hash the password before storing it into the DB
        const hashedPassword = await hashPassword(password);

        // Create the admin
        const AdminData = await Admin.create({ name, email, password: hashedPassword, mobile });

        // Check if the admin is created
        if (!AdminData) {
            return res.status(404).json({ error: "Admin not created" });
        }

        // Send response to the client
        res.status(200).json({ AdminData });
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ message: "Server error" });
    }
};


// Login Admin
exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate the data
        if (!email || !password) {
            return res.status(400).json({ error: "Email and Password are required" });
        }

        // Find admin by email
        const AdminData = await Admin.findOne({ where: { email } });

        // Check if admin is found
        if (!AdminData) {
            return res.status(404).json({ error: "Given email user not found" });
        }

        // Check if the password is correct
        const isPasswordCorrect = await checkPassword(password, AdminData.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        // Send response to the client
        res.status(200).json({ AdminData });
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ message: "Server error" });
    }
};