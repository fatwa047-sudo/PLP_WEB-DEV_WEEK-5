let userName = "Guest";
let monthlyBudget = 0;
let totalExpenses = 0;
let expenseCount = 0;
let isOverBudget = false;let userName = "Guest";
let monthlyBudget = 0;
let totalExpenses = 0;
let expenseCount = 0;
let isOverBudget = false;

userName = prompt("Enter your name:");
monthlyBudget = Number(prompt("Enter your monthly budget:"));
expenseCount = Number(prompt("How many expenses do you want to enter?"));

function addExpenses(count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += Number(prompt("Enter expense " + i + " amount:"));
  }
  return total;
}

function calculateBalance(budget, expenses) {
  return budget - expenses;
}

function checkOverBudget(balance) {
  return balance < 0;
}

totalExpenses = addExpenses(expenseCount);
let balance = calculateBalance(monthlyBudget, totalExpenses);
isOverBudget = checkOverBudget(balance);

console.log("=== SpendWise Summary ===");
console.log("User:", userName);
console.log("Monthly Budget:", monthlyBudget);
console.log("Total Expenses:", totalExpenses);
console.log("Remaining Balance:", balance);
console.log("Over Budget?", isOverBudget ? "Yes" : "No");

