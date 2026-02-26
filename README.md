Project Title
SauceDemo QA Automation Project – Cypress

Project Overview
This project demonstrates automated testing of the SauceDemo e-commerce application using Cypress. The goal of the project is to validate a complete checkout workflow while applying QA best practices such as Page Object Model design, reusable test commands, and structured test validation.


Testing Scope
The automation suite validates the following workflow:
1.	User login
2.	Product selection
3.	Add item to cart
4.	Cart validation
5.	Checkout process
6.	Order confirmation
   

Tools Used:
-Cypress
-JavaScript
-Page Object Model (POM)
-GitHub
-Node.js



Framework Design:

The automation framework uses a Page Object Model structure to improve maintainability and readability.

Structure:

-cypress
-support
-pages
-LoginPage.js
-ProductsPage.js
-CartPage.js
-CheckoutPage.js

tests
checkout.spec.js

Example Test Scenario:

Test Case: Successful Checkout

Steps:

Login with valid credentials

Add Sauce Labs Backpack to cart

Verify cart badge count updates

Open cart

Confirm correct item appears

Complete checkout information

Finish order

Expected Result:
Order confirmation message appears.



How to Run the Tests:

Install dependencies

npm install

Run Cypress

npx cypress open
