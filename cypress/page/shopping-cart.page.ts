class ShoppingCart {
    private proceed: string
    private shoppingCartMessage: string

    constructor() {
        this.proceed = ".cart_navigation > .button > span"
        this.shoppingCartMessage = "#center_column > div > p > strong"

    }
    public proceedCheckOut(): void {
        cy.get(this.proceed).click()
    }
    public assertSucces(): void {
        cy.get(this.shoppingCartMessage).should("have.text", "Your order on My Store is complete.")
    }
}


export { ShoppingCart }