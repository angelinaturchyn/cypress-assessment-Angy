export class LoginPage{

    authSuccess(){
        cy.get('input[id="email"]').type('me@example.com')
        cy.get('input[id="password"]').type('password')
        cy.get('button[type="submit"]').click()

    }

    authFailWrongEmailAndPass(){
        cy.get('input[id="email"]').type('fail')
        cy.get('input[id="password"]').type('fail')
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid email or password')
    }

    authFailBlankField(){
        cy.get('input[id="email"]')
        cy.get('input[id="password"]')
        cy.get('button[type="submit"]').click()
        cy.contains('Email is required')
        cy.contains('Password is required')
        cy.contains('Invalid email or password')

    }
}

export const onLoginPage = new LoginPage()
