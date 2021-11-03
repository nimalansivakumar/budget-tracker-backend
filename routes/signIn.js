const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, email, password, type, picture } = req.body;

    const newUser = new User({
      firstname,
      lastname,
      email,
      password,
      type,
      picture,
    });

    await newUser.save();

    res.status(200).send("Data Recieved");
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error");
  }
});

module.exports = router;
