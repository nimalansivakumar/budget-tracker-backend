const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  budgetName: {
    type: String,
    required: true,
  },
  expenseDate: {
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

const newBudgetSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  fundAlloted: {
    type: Number,
    required: true,
  },
  budgetName: {
    type: String,
    required: true,
  },
});

const budgetSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  budgets: [newBudgetSchema],
  expenses: [expenseSchema],
});

module.exports = mongoose.model("budgets", budgetSchema);
