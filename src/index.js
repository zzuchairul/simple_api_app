const express = require("express");
const Card = require("./models/Card");
const _ = require("./db");

require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const data = await Card.find();
  res.status(200).json({
    status: "ok",
    message: "Successfully find data",
    data,
  });
});

app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Card.findById(id);

    if (data == null) {
      res.status(404).json({
        status: "fail",
        message: "Cannot find data by given id",
      });
      return;
    }

    res.status(200).json({
      status: "ok",
      message: "Successfully find data by id",
      data,
    });
  } catch (error) {
    res.status(404).json(error);
  }
});

app.post("/", async (req, res) => {
  const data = new Card(req.body);
  const newData = await data.save();
  res.status(201).json({
    status: "ok",
    message: "Successfully add data",
    newData,
  });
});

app.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Card.findByIdAndUpdate(id, req.body);

    if (updated == null) {
      throw {
        status: "fail",
        message: "Cannot find data by given id",
      };
    }

    res.status(200).json({
      status: "ok",
      message: "successfully update data by given id",
      updatedId: updated.id,
    });
  } catch (error) {
    res.status(404).json(error);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Card.findByIdAndDelete(id);

    if (deleted == null) {
      throw {
        status: "fail",
        message: "Cannot find data by given id",
      };
    }

    res.status(200).json({
      status: "ok",
      message: "successfully delete data by given id",
      deletedId: deleted.id,
    });
  } catch (error) {
    res.status(404).json(error);
  }
});

app.listen(3000, () => {
  console.log(`listen at http://localhost:3000`);
});
