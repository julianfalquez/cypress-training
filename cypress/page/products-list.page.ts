class ProductsList {
    private addToCart: string;
    private proceedToCheckOut: string
    private proceedToCheckOutCart: string

    constructor() {
        this.addToCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckOut = ".button-container > .button-medium > span"
        this.proceedToCheckOutCart = ".cart_navigation > .button > span"

    }
    public clickAddToCart(): void {
        cy.get(this.addToCart).click()
    }

    public clickProceedToCheckOut(): void {
        cy.get(this.proceedToCheckOut).click()
    }

    public clickProceedToCheckOutCart(): void {
        cy.get(this.proceedToCheckOutCart).click()
    }
}

export { ProductsList }