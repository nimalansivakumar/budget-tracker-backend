const express = require("express");
const router = express.Router();
const budgetSchema = require("../models/budgets");
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  try {
    const email = req.body.email;
    const { date, fundAlloted, description } = req.body.newBudget;

    const newBudget = mongoose.model(email, budgetSchema);

    const budget = new newBudget({
      date,
      fundAlloted,
      description,
    });

    await budget.save();

    console.log(email, date, fundAlloted, description);
    res.status(200).send("Data Recieved");
  } catch (e) {
    res.status(400).send("Server Error");
  }
});

module.exports = router;
