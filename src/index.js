const express = require("express");

const app = express();

const data = [
  {
    id: 0,
    nama: "Adit",
    umur: 16,
  },
  {
    id: 1,
    nama: "Zuchairul",
    umur: 19,
  },
  {
    id: 2,
    nama: "Fauzan",
    umur: 20,
  },
];

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log(`listen at http://localhost:3000`);
});
