Project Title: SauceDemo QA Automation Project-Cypress

Project Overview:
This project demonstrates automated testing of the SauceDemo e-commerce application using Cypress. 
The goal of the project is to validate a complete checkout workflow while applying QA best practice, such as
Page Object Model design, reusable test commands, and struture test validation.


Testing Scope:
This automation suite validates the following workflow:
1. User Login
2. Product Selection
3. Add item to cart
4. Cart validation
5. Checkout process
6. Order confirmation



Tools Used:
1. Cypress
2. JavaScript
3. Pade Object Model (POM)
4. GitHub
5. Node.js



Framework Design:
The automation framework uses a Page Object Model structure to improve maintainability and readability.

File Struture: 
1. cypress
2. support
3. pages
4. LoginPage.js
5. ProductPage.js
6. CartPage.js
7. CheckoutPage.js

Test:
checkout.spec.js

 Test Scenario:

Test Case- Successful Checkout

Steps:
1. Login with valid credentials
2. Add Sauce Labs Backpack to cart
3. Verify cart badge count updates
4. Open cart
5. Confirm correct item appears
6. Complete checkout information
7. Finish order

Expected Result:
Order confirmation message appears.

Automation Test:
import LoginPage from '../support/pages/LoginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';

describe('SauceDemo End-to-End Checkout Flow with POM + Custom Commands', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
  });

  it('Completes checkout for one item', () => {
    ProductsPage.addBackpackToCart();
    ProductsPage.assertCartBadgeCount(1);
    ProductsPage.openCart();

    CartPage.assertOnCartPage();
    CartPage.assertItemInCart('Sauce Labs Backpack');
    CartPage.clickCheckout();

    CheckoutPage.assertOnCheckoutStepOne();
    CheckoutPage.fillCustomerInfo('John', 'Doe', '12345');
    CheckoutPage.clickContinue();
    CheckoutPage.clickFinish();

    CheckoutPage.assertOrderComplete();
  });
});



How to Run:

1. Install dependencies
2. npm install
3. Run Cypress
4. npx cypress open









