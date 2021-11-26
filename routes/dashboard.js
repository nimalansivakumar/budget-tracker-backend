const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Budgets = require("../models/budgets");

router.get("/fetchUser/:userid", async (req, res) => {
  try {
    var budgetList = [];

    //fetch userDetails
    const userData = await User.find({ email: req.params.userid });

    //fetch budgetnames
    try {
      await Budgets.exists().then(async () => {
        await Budgets.find({ id: req.params.userid })
          .select("budgets")
          .then((list) => {
            list[0].budgets.forEach((val) => {
              budgetList.push(val.budgetName);
            });
          });
      });
    } catch (e) {
      return res.json({ userData, budgetList: "No Budgets Found" });
    }

    return res.json({ userData, budgetList });
  } catch (e) {
    res.status(400).send("Server Error");
  }
});

module.exports = router;
