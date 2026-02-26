Project Title

SauceDemo QA Automation Project – Cypress

Project Overview

This project demonstrates automated testing of the SauceDemo e-commerce application using Cypress. The goal of the project is to validate a complete checkout workflow while applying QA best practices such as Page Object Model design, reusable test commands, and structured test validation.

Testing Scope

The automation suite validates the following workflow:

User login

Product selection

Add item to cart

Cart validation

Checkout process

Order confirmation

This ensures the core purchasing functionality works as expected.

Tools Used

Cypress
JavaScript
Page Object Model (POM)
GitHub
Node.js

Optional if true:

Jira
Zephyr
Postman
SQL

Framework Design

The automation framework uses a Page Object Model structure to improve maintainability and readability.

Example structure:

cypress
support
pages
LoginPage.js
ProductsPage.js
CartPage.js
CheckoutPage.js

tests
checkout.spec.js

Each page file contains reusable methods that represent user interactions on that page.


How to Run the Tests

Install dependencies

npm install

Run Cypress

npx cypress open

or

npx cypress run




