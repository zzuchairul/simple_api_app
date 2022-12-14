const express = require("express");
const mongoose = require("mongoose");
const _ = require("./db");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  // res.send(db);
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log(`listen at http://localhost:3000`);
});
