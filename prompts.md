# Prompts Used: Smart Expense Tracker

## Initial Structured Prompt

**Role:** You are a patient senior web developer mentoring a beginner.

**Context:** I'm a student building a simple Smart Expense Tracker web page for a course assignment. I know basic HTML, CSS and JavaScript. Data may reset on page refresh.

**Task:** First, break the app into small steps (task decomposition). Don't write code yet. Then wait for me to ask for the HTML, CSS and JavaScript one at a time.

**Features needed:** add an expense (name, amount, category), show the list of expenses, show the total spent, delete an expense, and show a message for invalid input (empty name, or amount of zero or less).

**Constraints:** Plain HTML, CSS and JavaScript only. No backend, database, login or libraries. Keep the code simple and commented.

**Examples:** Valid: "Lunch", 12.50, "Food". Invalid: "" with 5, or "Taxi" with -3.

**Output Format:** A numbered list of steps, each with one sentence on what it does.

**Success Criteria:** Each step is small enough to build and test on its own, and the final app meets every feature above.

## Follow-up Prompts

1. HTML
   **Prompt:** "(Please create a HTML Code)"
   **Tool used:** ChatGPT
   **Result:** Generated the HTML Form, list area and total in Expense.html

2. CSS
   **Prompt:** "(Please create a CSS Code)"
   **Tool used:** ChatGPT
   **Result:** Styled the page in Expense.css with a card-style form, blue buttons

3. JavaScript
   **Prompt:** "(Please create a CSS Code)"
   **Tool used:** ChatGPT
   **Result:**Adding, total, delete and validation all worked in testing

## Improvement Note

**Prompt:** "Review my code and suggest one simple improvement."

**Change:** Added a "No expenses yet." message that shows when the expense list is empty.

**Why:** When the list was empty, the page just showed blank space, which looked unfinished and gave the user no feedback. A short message makes it clear that nothing has been added yet.

**How it works:** In `displayExpenses()`, the code checks `expenses.length === 0`. If the array is empty, it creates a list item with the message and adds it to the list. Because `displayExpenses()` rebuilds the list after every add or delete, the message disappears when an expense is added and returns when the last one is deleted. I also call `displayExpenses()` once at the bottom of the file so the message shows when the page first loads.

**How I tested it:** I refreshed the page and saw the message. I added an expense and the message disappeared. I deleted it and the message returned, with the total showing $0.00. Screenshot: 06-empty-state.png

**Problem along the way:** When I pasted the new code, the line breaks were lost, and a `//` comment swallowed the `if` statement, so the message did not appear. I found it using `grep`, split the code onto separate lines, and then it worked.
