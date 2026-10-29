
// Find the form and page elements
const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const totalSpent = document.getElementById("total-spent");
const errorMessage = document.getElementById("error-message");

// Store expenses while the page is open
let expenses = [];

// Listen for the form being submitted
expenseForm.addEventListener("submit", function (event) {
    // Stop the browser from refreshing the page
    event.preventDefault();

    // Read the values entered by the user
    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Check that the name is not empty
    if (name === "") {
        errorMessage.textContent = "Please enter an expense name.";
        return;
    }

    // Check that the amount is a valid positive number
    if (
        expenseAmount.value.trim() === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        errorMessage.textContent = "Please enter an amount greater than zero.";
        return;
    }

    // Check that a category has been selected
    if (category === "") {
        errorMessage.textContent = "Please select a category.";
        return;
    }

    // Clear any previous error message
    errorMessage.textContent = "";

    // Create an expense object
    const expense = {
        id: Date.now() + Math.random(),
        name: name,
        amount: amount,
        category: category
    };

    // Add the new expense to our array
    expenses.push(expense);

    // Refresh the expense list and total
    displayExpenses();

    // Clear the form for the next expense
    expenseForm.reset();
});

// Display all expenses and calculate the total
function displayExpenses() {
    // Clear the old list before displaying it again
    expenseList.innerHTML = "";

    // Start the total at zero
    let total = 0;
// Show a friendly message when there are no expenses
if (expenses.length === 0) { 
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "No expenses yet.";
    expenseList.appendChild(emptyItem);
}
    // Go through each expense in the array
    expenses.forEach(function (expense) {
        // Add this expense to the total
        total += expense.amount;

        // Create a list item
        const listItem = document.createElement("li");

        // Create a text container for the expense details
        const details = document.createElement("span");
        details.textContent =
            expense.name + " - $" + expense.amount.toFixed(2) +
            " (" + expense.category + ")";

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        // Remove this expense when Delete is clicked
        deleteButton.addEventListener("click", function () {
            expenses = expenses.filter(function (item) {
                return item.id !== expense.id;
            });

            // Update the list and total
            displayExpenses();
        });

        // Add the details and button to the list item
        listItem.appendChild(details);
        listItem.appendChild(deleteButton);

        // Add the list item to the page
        expenseList.appendChild(listItem);
    });

    // Show the updated total with two decimal places
    totalSpent.textContent = "$" + total.toFixed(2);
}
displayExpenses();