const express = require("express");
const router = express.Router();
const Budgets = require("../models/budgets");

router.post("/", async (req, res) => {
  try {
    const { userid, budget } = req.body;
    const fetchedBudget = await Budgets.findOne({
      id: userid,
    });

    var allotedAmount,
      spentAmount = 0,
      balanceAmount;

    var expenseList = [];

    fetchedBudget.budgets.find((doc) => {
      if (doc.budgetName === budget) {
        allotedAmount = doc.fundAlloted;
      }
    });

    fetchedBudget.expenses.find((doc) => {
      if (doc.budgetName === budget) {
        spentAmount += doc.amount;
        expenseList.push(doc);
      }
    });

    balanceAmount = allotedAmount - spentAmount;

    let moneyValues = {
      allotedAmount: allotedAmount,
      spentAmount: spentAmount,
      balanceAmount: balanceAmount,
    };

    return res.json({ moneyValues, expenseList });
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error");
  }
});

router.post("/deleteItem/:itemID", async (req, res) => {
  try {
    const id = req.params.itemID;
    const { userid, currentBudget } = req.body;

    await Budgets.updateOne(
      { id: userid },
      { $pull: { expenses: { _id: id } } },
      { multi: true }
    );

    res.status(200).send("Data Recieved");
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error");
  }
});

module.exports = router;
