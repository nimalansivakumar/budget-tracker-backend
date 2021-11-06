const express = require("express");
const router = express.Router();
const budgetSchema = require("../models/budgets");
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send("Data Recieved");
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error");
  }
});

module.exports = router;