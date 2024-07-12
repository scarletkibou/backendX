require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

const customerRoutes = require("./routes/customers");
const machineRoutes = require("./routes/machines");
const merchantRoutes = require("./routes/merchants");
const bankRoutes = require("./routes/banks");
const storeRoutes = require("./routes/stores");

app.use("/customers", customerRoutes);
app.use("/machines", machineRoutes);
app.use("/merchants", merchantRoutes);
app.use("/banks", bankRoutes);
app.use("/stores", storeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4545;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected...");
      return sequelize.sync({ alter: true }); 
    })
    .then(() => {
      console.log("Database synchronized"); 
    })
    .catch((err) => {
      console.error("Error: " + err);
    });
});

module.exports = app;
