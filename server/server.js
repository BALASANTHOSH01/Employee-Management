require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

const employeeRoutes = require("./src/api/routes/employeeRoutes");
const authRoutes = require("./src/api/routes/authRoutes");
const syncModel = require("./src/api/utils/syncModel");

app.use(express.json());
app.use(cors());

// Increase the limit to handle large payloads
app.use(bodyParser.json({ limit: '50mb' })); // Increase limit as needed
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/employee", employeeRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Server is running.");
});

// Synchronize the database and start the server
syncModel(app, PORT);

module.exports = app;
