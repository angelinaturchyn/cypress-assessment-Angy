import {onLoginPage} from "../support/page/login.page";

describe('Performance test', ()=> {
    before('open app',() =>{
        cy.visit('/')
        onLoginPage.authSuccess()
    })
    it('measures page load on the home page', () => {
        cy.visit('/dashboard', {
            onBeforeLoad(win) {
                win.performance.mark('start-loading');
            }
        })
            .its('performance')
            .then((performance) =>{
                cy.get('body').should('have.text','DashboardProfileNotifications5LogoutIDNameEmailCreated_atEditDelete1Jon doejhondoe@example.com2021-1-12EditDelete1Jon doejhondoe@example.com2021-1-12EditDelete1Jon doejhondoe@example.com2021-1-12EditDelete{"props":{"pageProps":{}},"page":"/dashboard","query":{},"buildId":"development","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]}')
                    .then(() => performance.mark('end-loading'))
                performance.measure('pageLoad', 'start-loading')
                const measure = performance.getEntriesByName('pageLoad')[0];
                const duration = measure.duration;
                assert.isAtMost(duration, 5000);
            })
    })

})

describe('Request and response',() =>{
    beforeEach('open app',() =>{
        cy.request('/dashboard').as('response')
    })

    it('Status validation',() =>{
        cy.get('@response').its('headers').its('content-type')
            .should('include', 'text/html; charset=utf-8')
    })

    it('Status code is 200', () =>{
        cy.get('@response').its('status')
            .should('equal',200)
    })
})
