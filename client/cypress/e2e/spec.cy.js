describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/')

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', 'http://localhost:3000/')

    //Ensure creating a friend is working properly
    cy.get('.nameinput')
      .type('Cypress Tester')
      .should('have.value', 'Cypress Tester')

    cy.get('.emailinput')
      .type('cypress@test.com')
      .should('have.value', 'cypress@test.com')

    cy.get('.phoneinput')
      .type('0405465478')
      .should('have.value', '0405465478')

    cy.contains('Submit').click()

    cy.wait(2000)

    //Ensure you can update values
    cy.get('.friendname').last()
      .clear()
      .type('Cypress Tester2')
      .should('have.value', 'Cypress Tester2')

      //reload the page
    cy.reload()

    //ensure name is the same because of no update
    cy.get('.friendname').last()
    .should('have.value', 'Cypress Tester')


    //re type the name
    cy.get('.friendname').last()
    .clear()
    .type('Cypress Tester2')
    .should('have.value', 'Cypress Tester2')

    //update
    cy.get('.updateFriend').last().click()

    //reload
    cy.reload()

    //delete
    cy.get('.deleteFriend').last().click()
    cy.reload()

    //ensure friend is deleted
    cy.get('.friendname').last()
    .should('not.have.value', 'Cypress Tester2')

  })
})