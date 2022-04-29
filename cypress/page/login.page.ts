class Login {
    private email: string;
    private password: string;
    private submitLogin: string;
    private emailText: string;
    private passwordText: string;

    constructor() {
        this.email = "#email";
        this.password = "#passwd"
        this.submitLogin = "#SubmitLogin > span";
        this.emailText = "aperdomobo@gmail.com";
        this.passwordText = "WorkshopProtractor"

    }
    public typeEmail(): void {
        cy.get(this.email).type(this.emailText)
    }

    public typePassword(): void {
        cy.get(this.password).type(this.passwordText)
    }
    public clickSubmitLogin(): void {
        cy.get(this.submitLogin).click()
    }
}

export { Login }

