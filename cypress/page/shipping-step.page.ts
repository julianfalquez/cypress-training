class ShippingStep {
    private checkBox: string;
    constructor() {
        this.checkBox = "#cgv";

    }
    public clickCheckBox(): void {
        cy.get(this.checkBox).click()
    }

}

export { ShippingStep }