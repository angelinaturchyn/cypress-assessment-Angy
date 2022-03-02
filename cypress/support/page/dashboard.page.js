export class DashboardPage{

   dashLogo(){
       cy.get('img[class="mx-auto h-12 w-auto"]')
   }
   dashboName(){
       cy.contains('Dashboard').click()
   }
   profileName(){
       cy.contains('Profile').click()
   }
   notificationsName(){
       cy.contains('Notifications').click()
   }
   logoutName(){
       cy.contains('Logout').click()
   }



}

export const onDashboardPage = new DashboardPage()
