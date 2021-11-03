const express = require("express");
const router = express.Router();
const createBudget = require("../models/budgets");

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const { newBudget } = req.body;

    console.log(email, newBudget);
    res.status(200).send("Data Recieved");
  } catch (e) {
    res.status(400).send("Server Error");
  }
});

module.exports = router;
