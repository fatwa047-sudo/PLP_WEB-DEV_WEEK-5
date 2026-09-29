# SpendWise

## What the project does

SpendWise is a simple budgeting tracker. The page provides the layout (built earlier with HTML, CSS Grid and Flexbox), and this stage adds a JavaScript foundation so the app can process data. When the page loads, SpendWise asks the user for their name, monthly budget and expenses, calculates the total spent and the remaining balance, and shows a labeled summary in the browser console.

## JavaScript concepts implemented

- Variables (`let`) to store application data
- Data types: strings, numbers and booleans
- User input with `prompt()` and type conversion with `Number()`
- Arithmetic calculations
- Loops (`for`) to collect several expenses
- Conditionals (ternary operator) to show Yes/No results
- Reusable functions with parameters and return values
- Output with `console.log()`

## How variables are used

Variables hold the key budgeting information:

- `userName` (string): the user's name
- `monthlyBudget` (number): the total budget for the month
- `expenseCount` (number): how many expenses the user will enter
- `totalExpenses` (number): the sum of all expenses
- `isOverBudget` (boolean): whether spending is above the budget

## How user input is collected

The app uses `prompt()` dialogs to ask for the name, budget, number of expenses and each expense amount. Because `prompt()` returns text, the values are converted to numbers with `Number()` before any calculation.

## How calculations are performed

- Total expenses: each amount is added to a running total inside a `for` loop.
- Remaining balance: `monthlyBudget - totalExpenses`.
- Over budget check: the balance is compared to 0. A negative balance means the user has overspent.

## How functions help organize the code

The logic is split into small reusable functions:

- `addExpenses(count)`: collects expenses and returns the total
- `calculateBalance(budget, expenses)`: returns the remaining balance
- `checkOverBudget(balance)`: returns `true` or `false`

This keeps the code easier to read, test and reuse, and avoids repeating calculations.

## Project files

- `index.html`: page structure, links `style.css` and `script.js`
- `style.css`: styling and layout
- `script.js`: JavaScript logic
- `README.md`: project documentation

## How to run

1. Open `index.html` in a browser.
2. Answer the prompts.
3. Open the console (F12, then Console) to see the SpendWise summary.
4.
