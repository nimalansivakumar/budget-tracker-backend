const express = require("express");
const router = express.Router();
const User = require("../models/user");
const budgetSchema = require("../models/budgets");
const mongoose = require("mongoose");

router.get("/fetchUser/:userid", async (req, res) => {
  try {
    const userData = await User.find({ email: req.params.userid });
    res.json(userData);
    res.status(200).send("Data Recieved");
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error");
  }
});

router.get("/fetchBudget/:userid", async (req, res) => {
  try {
    const budgetList = [];

    (await mongoose.model(req.params.userid, budgetSchema).find()).forEach(
      (doc) => {
        budgetList.push(doc.description);
      }
    );

    res.json(budgetList);

    res.status(200).send("Data Recieved");
  } catch (e) {
    res.status(400).send("Server Error");
  }
});

module.exports = router;
