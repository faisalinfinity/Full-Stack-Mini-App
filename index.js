const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { LoginRoute } = require("./Routes/LoginRoute");
const { RegisterRoute } = require("./Routes/RegisterRoute");
const connection = require("./Connection/connection");
const { AlluserRoute } = require("./Routes/AlluserRoute");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/register", RegisterRoute);
app.use("/login", LoginRoute);
app.use("/users",AlluserRoute)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MONGO");
  } catch (error) {
    console.log(error);
  }
});
