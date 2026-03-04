import LoginPage from '../support/pages/LoginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';

describe('SauceDemo End-to-End Checkout Flow with POM + Custom Commands', () => {
  beforeEach(function () {
  cy.fixture('user').then((data) => {
    this.user = data.standardUser;
    cy.login(this.user.username, this.user.password);
  });
});

  it('Completes checkout for one item', () => {
    ProductsPage.addBackpackToCart();
    ProductsPage.assertCartBadgeCount(1);
    ProductsPage.openCart();

    CartPage.assertOnCartPage();
    CartPage.assertItemInCart('Sauce Labs Backpack');
    CartPage.clickCheckout();

    CheckoutPage.assertOnCheckoutStepOne();
    cy.fixture('user').then((data) => {
  const info = data.checkoutInfo;
  CheckoutPage.fillCustomerInfo(
    info.firstName,
    info.lastName,
    info.postalCode
  );
});
    CheckoutPage.clickContinue();
    CheckoutPage.clickFinish();

    CheckoutPage.assertOrderComplete();
  });
});
