
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
