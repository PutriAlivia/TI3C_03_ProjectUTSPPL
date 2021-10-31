// cypress //

describe('Sorting - Hendri Daffa Athaya - 1941720199', () => {
    beforeEach(() => {
        // Login
        cy.visit('/')
        // tes skenario 5
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
         cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })

    // tes skenario 
     it('TC_LOGIN', () => {
        cy.visit('/');
        cy.get('#user-name').type("locked_out_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('TC_LOGIN', () => {
        cy.visit('/');
        cy.get('#user-name').type("problem_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('TC_LOGIN', () => {
        cy.visit('/');
        cy.get('#user-name').type("user");
        cy.get('#password').type("user123");
        cy.get('#login-button').click();
        cy.get('form').find('h3').should('have,text', 'Epic sadface: Username and password do not match any user in this service');
    })
    it('TC_LOGIN', () => {
        cy.visit('/');
        cy.get('#user-name').type("user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('form').find('h3').should('have,text', 'Epic sadface: Username do not match any user in this service');
    })
    it('TC_LOGIN', () => {
        cy.visit('/');
        cy.get('#user-name').type("performance_glitch_user");
        cy.get('#password').type("user123");
        cy.get('#login-button').click();
        cy.get('form').find('h3').should('have,text', 'Epic sadface: Username do not match any user in this service');
    })
    it('TC_LOGIN', () => {
        cy.visit('/');
        cy.get('#user-name').type("performance_glitch_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
})