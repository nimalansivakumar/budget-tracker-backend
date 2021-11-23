const express = require("express");
const router = express.Router();
const Budgets = require("../models/budgets");
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  try {
    const userid = req.body.id;
    const { date, fundAlloted, budgetName } = req.body.newBudget;
    const docsExist = await Budgets.exists({ id: userid });

    const addNewBudget = async () => {
      await Budgets.findOneAndUpdate(
        { id: userid },
        {
          $addToSet: {
            budgets: {
              date: date,
              fundAlloted: fundAlloted,
              budgetName: budgetName,
            },
          },
        }
      );
    };

    if (docsExist) {
      addNewBudget();
    } else {
      const budgetDoc = new Budgets({
        id: userid,
      });
      await budgetDoc.save();
      addNewBudget();
    }

    res.status(200).send("Data Recieved");
  } catch (e) {
    res.status(400).send("Server Error");
  }
});

module.exports = router;
