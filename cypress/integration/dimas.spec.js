// cypress //

describe('Sorting - Dimas Ilham Rivaldy - 1941720206', () => {
    beforeEach(() => {
        // Login
        cy.visit('/')
        // tes skenario 5
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    // tes skenario 
    it('1. Filter By Name A to Z', () => {
        cy.get('select[class="product_sort_container"]').select('az')
    })
    // tes skenario
    it('2. Filter By Name Z to A', () => {
        cy.get('select[class="product_sort_container"]').select('za')
    })
    // tes skenario
    it('3. Filter By Price low to high', () => {
        cy.get('select[class="product_sort_container"]').select('lohi')
    })
    // tes skenario
    it('4. Filter By Price high to low', () => {
        cy.get('select[class="product_sort_container"]').select('hilo')
    })
})