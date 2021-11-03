const mongoose = require("mongoose");

const bdugetSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  fundAlloted: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budgets: [
    {
      bgDate: {
        type: Date,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      spentOn: {
        type: String,
        required: true,
      },
    },
  ],
});

const createBudget = mongoose.model("budget", bdugetSchema);
module.exports = createBudget;
