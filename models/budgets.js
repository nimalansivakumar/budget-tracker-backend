const mongoose = require("mongoose");

const expenses = new mongoose.Schema({
  bgDate: {
    type: String,
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
});

const budgetSchema = new mongoose.Schema({
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
  budgets: [expenses],
});

module.exports = budgetSchema;
