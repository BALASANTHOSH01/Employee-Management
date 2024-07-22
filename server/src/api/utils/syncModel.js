const sequelize = require("../../config/db");

const syncModel = (app, PORT) => {
  // Synchronize all models with the database (without dropping tables)
  sequelize
    .sync({ alter: true }) // Use alter: true to update existing tables
    .then(() => {
      app.listen(PORT, () => { 
        console.log(`Server is running on port: ${PORT}`);
      });
      console.log("Database & tables synchronized!");
    })
    .catch((err) => {
      console.error("Error synchronizing database & tables:", err);
    });
};

module.exports = syncModel;
