const express = require('express');
const Router = express.Router();
const {CreateExpense, GetAllExpenses,GetExpensesById } = require ('../Controllers/Expenses');

// Getting specific Expenses
Router.get('/',GetExpensesById)

// Creating an New Expense
Router.post('/', CreateExpense)

// Getting all existing Expenses
Router.get('/:id', GetAllExpenses)

module.exports = Router; 