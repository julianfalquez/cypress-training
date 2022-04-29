class PaymentStep {
    private bankwire: string;

    constructor() {
        this.bankwire = ".bankwire";

    }
    public clickBankwire(): void {
        cy.get(this.bankwire).click()
    }
}

export { PaymentStep }