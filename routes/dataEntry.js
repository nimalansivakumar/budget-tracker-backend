const express = require("express");
const router = express.Router();
const budgetSchema = require("../models/budgets");
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  try {
    const email = req.body.userid;
    const { budgetName, date, amount, spentOn } = req.body.expense;
    const newBudget = mongoose.model(email, budgetSchema);

    await newBudget.findOneAndUpdate(
      { description: budgetName },
      {
        $addToSet: {
          budgets: {
            bgDate: date,
            amount: amount,
            spentOn: spentOn,
          },
        },
      }
    );

    res.status(200).send("Data Recieved");
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error");
  }
});

module.exports = router;
