const express = require("express");
const budgets = require("../models/budgets");
const router = express.Router();
const Budgets = require("../models/budgets");

router.post("/", async (req, res) => {
  try {
    const { budgetChose, date, amount, spentOn } = req.body.expense;

    await Budgets.findOneAndUpdate(
      {
        id: req.body.userid,
      },
      {
        $addToSet: {
          expenses: {
            budgetName: budgetChose,
            expenseDate: date,
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

// {
//   $addToSet: {
//     expenses: {
//       expenseDate: date,
//       amount: amount,
//       spentOn: spentOn,
//     },
//   },
// }
