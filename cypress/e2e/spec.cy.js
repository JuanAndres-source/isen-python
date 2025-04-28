describe('Create and connect to an account', () => {
    it('Visits the Oc commerce site', () => {
      cy.visit('/home')
  
      cy.contains('SIGNUP').click()
      cy.url().should('include', '/user/signup')
      cy.get('[id^=fname]').type('fakeuser')
      cy.get('[id^=lname]').type('toto')
      cy.get('[id^=username]').type('fakeuser')
      cy.get('[id^=email]').type('fake@email.com')
      cy.get('[id^=pass]').type('1hstesh<23456789')
      cy.get('[id^=re_pass]').type('1hstesh<23456789')
      cy.get('form').contains('Register').click()
      cy.url().should('include', '/user/login')
  
      cy.get('[id^=your_name]').type('fakeuser')
      cy.get('[id^=your_pass]').type('1hstesh<23456789')
      cy.get('form').contains('Log in').click()
      cy.url().should('include', '/home')
      cy.contains('FAVOURITE')
    })
  })
  
  describe('Put item in favourite', () => {
    it('Connect to OC commerce and put in favourite', () => {
        describe('Put item in favourite', () => {
            it('Connect to OC commerce and put in favourite', () => {
              // Load home url
              cy.visit('/home')
          
              // Connect with previous account
              cy.get('[id^=your_name]').type('fakeuser')
              cy.get('[id^=your_pass]').type('1hstesh<23456789')
              cy.get('form').contains('Log in').click()
              cy.url().should('include', '/home')
          
              // Go to favourite page and check empty
              cy.contains('FAVOURITE').click()
              cy.url().should('include', '/user/favourite')
              cy.contains('No favourites yet') // Ajusta esto si el texto es diferente
          
              // Go back to home
              cy.contains('Home').click()
          
              // Add an item to favourites
              cy.get('.item-card').first().contains('Add to Favourite').click()
          
              // Go to favourite and confirm item is here
              cy.contains('FAVOURITE').click()
              cy.url().should('include', '/user/favourite')
              cy.get('.item-card').should('have.length.greaterThan', 0)
          
              // Delete the item and check it's deleted
              cy.get('.item-card').first().contains('Remove').click()
              cy.contains('No favourites yet')
            })
          })
          
    })
  })
  