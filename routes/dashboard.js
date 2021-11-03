const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:userid", async (req, res) => {
  try {
    console.log(userData);
    res.status(200).send("Data Recieved");
  } catch (e) {
    res.status(400).send("Server Error");
  }
});

module.exports = router;
