import { MenuContentPage } from "../page/index";
import { ProductsList } from "../page/index";
import { Login } from "../page/index";
import { ShippingStep } from "../page/index";
import { PaymentStep } from "../page/index";
import { ShoppingCart } from "../page/index";

const menuContentPage = new MenuContentPage();
const productsList = new ProductsList();
const login = new Login();
const shippingStep = new ShippingStep();
const paymentStep = new PaymentStep();
const shoppingCart = new ShoppingCart();


describe("Buy a t-shirt", () => {
    it("then the t-shirt should be bought", () => {
        menuContentPage.visitMenuContentPage();
        menuContentPage.goToTShirtMenu();
        productsList.clickAddToCart();
        productsList.clickProceedToCheckOut();
        shoppingCart.proceedCheckOut();
        login.typeEmail();
        login.typePassword();
        // Debes completar la prueba ...
        login.clickSubmitLogin();
        shoppingCart.proceedCheckOut();
        shippingStep.clickCheckBox()
        shoppingCart.proceedCheckOut();
        paymentStep.clickBankwire()
        shoppingCart.proceedCheckOut();
        shoppingCart.assertSucces()
    });
});
