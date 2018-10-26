describe('My First Test', function() {
//Login dan apply//
  it('Cermati', function() {
    cy.visit('https://www.cermati.com')

    cy.title().should('include', 'Cermati: Pinjaman, Kartu Kredit, Asuransi dan Tabungan Terbaik - Cermati')

    cy.get('#main-navigation > ul.nui-main-navigation.nui-account.nav.pull-left.hidden-sm.hidden-xs > li > a:nth-child(1)').click();

    cy.get('#auth-email-content > .panel > .panel-body > .auth-form > .form-groups > .form-group > .form-control').type('fkurnia@cermati.com')

    cy.get('#btnCheckEmail').click()

    cy.get('.password-eye-container > .form-control').type('cermat123')

    cy.get('#auth-password-content > .panel > .panel-body > .auth-form > .btn').click();

//apply CC//
    cy.get('.ce-cards').click()

    cy.get('[data-product-id="5b57f5df0a6d3750bd384777"] > .nui-card-content > .content-actions > .btn').click();

  })
})
