context('Hello Strava', () => {
	before(() => {
		cy.visit('https://www.strava.com/');
        cy.get('[href="/login"]').first().click();
        cy.get('#email').type('test@test.com');
        cy.get('#password').type('test1234#');
	});
    it('should log into strava.com')
});
