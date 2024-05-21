const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const router = require('./router/mailRoutes')
const PORT = 3200;


app.use(cors());

app.use(express.json());


app.use("/api", router);
app.get("/", function (req, res) {
  res.send("Hellow World");
});
app.listen(PORT, () => {
  console.log("Server is listening at " + PORT);
});

module.exports = app;