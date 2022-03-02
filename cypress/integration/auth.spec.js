import {onLoginPage} from "../support/page/login.page";
import {onDashboardPage} from "../support/page/dashboard.page";

describe('Auth', function(){
    beforeEach('open app',() =>{
        cy.visit('/')
    })

    it('Successful login', function(){
      onLoginPage.authSuccess()

    })
    it('Auth failed with wrong email and password', function(){
        onLoginPage.authFailWrongEmailAndPass()
    })
    it('Auth failed with empty email and password', function(){
        onLoginPage.authFailBlankField()
    })
})

describe('Side menu', function(){

    beforeEach('open app',() =>{
        cy.visit('/dashboard#')
    })
    it('Logo is visible', function () {
      onDashboardPage.dashLogo()
    })
    it('Dashboard btn', function () {
        onDashboardPage.dashboName()
    })
    it('Profile btn', function () {
        onDashboardPage.profileName()
    })
    it('Notifications btn', function () {
        onDashboardPage.notificationsName()
    })
    it('Notifications btn', function () {
        onDashboardPage.logoutName()
    })
})
