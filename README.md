# SauceDemo QA Automation Project – Cypress

## Project Overview

This project demonstrates automated end-to-end testing of the SauceDemo e-commerce application using Cypress.

The objective of this project is to validate the complete checkout workflow while applying QA best practices such as:

- Page Object Model (POM) design
- Reusable custom commands
- Structured test validation
- Assertion-based verification

This project reflects practical automation testing principles and framework organization.

---

## Testing Scope

The automation suite validates the following user workflow:

1. User login
2. Product selection
3. Add item to cart
4. Cart badge validation
5. Checkout process
6. Order confirmation

The test ensures that the core purchasing functionality works as expected.

---

## Tools & Technologies Used

- Cypress
- JavaScript
- Page Object Model (POM)
- Node.js
- GitHub

---

## Framework Design

The automation framework follows a Page Object Model (POM) structure to improve maintainability, scalability, and readability.

Each page file contains reusable methods that represent user interactions and assertions specific to that page.

---

## Project Structure
cypress/
├── e2e/
│ └── checkout.spec.js
├── support/
│ └── commands.js
└── pages/
├── LoginPage.js
├── ProductsPage.js
├── CartPage.js
└── CheckoutPage.js

---

## Sample Test Scenario

### Test Case: Successful Checkout

**Steps:**

1. Log in with valid credentials  
2. Add "Sauce Labs Backpack" to cart  
3. Verify cart badge count updates  
4. Open cart  
5. Confirm correct item appears  
6. Complete checkout information  
7. Click Finish  

**Expected Result:**

- Order confirmation message appears
- Checkout process completes successfully

---

## Automation Implementation

The test is implemented using Cypress with:

- Custom commands for login
- Page Object Model methods for interaction
- Assertions for validation
- Environment variables for credentials

Please refer to the Cypress test files inside the `cypress` folder for full implementation details.

---

## How to Run the Project

1. Clone the repository  
2. Install dependencies  
3. Run Cypress in interactive mode

 
---

## Future Enhancements

- Add negative test scenarios
- Add API testing integration
- Implement CI/CD pipeline integration
- Generate test reporting

---

## Objective

This project demonstrates practical automation skills including test structure design, reusable code patterns, and workflow validation using Cypress.


