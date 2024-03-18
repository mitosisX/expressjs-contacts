const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();
const port = process.env.PORT;

app.use(express.json()); //middleware for parsing JSON, otherwise returns undefined body
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler); //erro handling middleware

app.listen(port, () => {
  console.log("Server running");
});
