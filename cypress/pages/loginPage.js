class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/web/index.php/auth/login')
        cy.get(this.selectorsList().usernameField).should('be.visible')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessIvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible')


    }
}

export default LoginPage