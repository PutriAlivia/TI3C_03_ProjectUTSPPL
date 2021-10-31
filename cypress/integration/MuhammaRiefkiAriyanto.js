// cypress //

describe('Add To Cart - MuhammdRiefki Ariyanto - 1941720103', () => {
    beforeEach(() => {
        // Login
        cy.visit('/')
        // tes skenario 5
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    // tes skenario 
    it('1. Add To Cart Sauce Labs Backpack', () => {
        cy.get('#item_4_img_link > .inventory_item_img').click()
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    })
    it('2. Add To Cart Sauce Labs Bike Light', () => {
        cy.get('#item_0_img_link > .inventory_item_img').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
    })
    it('3. Add To Cart Sauce Labs Bolt T-Shirt', () => {
        cy.get('#item_1_img_link > .inventory_item_img').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
    })
    it('4. Add To Cart Sauce Labs Fleece Jacket', () => {
        cy.get('#item_5_img_link > .inventory_item_img').click()
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click()
    })
    it('5. Add To Cart Test.allTheThings() T-Shirt (Red)', () => {
        cy.get('#item_3_img_link > .inventory_item_img').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    })
})