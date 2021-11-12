// write tests below
// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form

describe('App', () => {
  // start with fresh state
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  })

  // helpers
  const nameInput = () => cy.get('input[name=username]');
  const sizeInput = () => cy.get('select[name=size]');
  const sauceInput = () => cy.get('input[name=sauce]');
  const topping1Input = () => cy.get('input[name=topping1]');
  const topping2Input = () => cy.get('input[name=topping2]');
  const topping3Input = () => cy.get('input[name=topping3]');
  const topping4Input = () => cy.get('input[name=topping4]');
  const submitBtn = () => cy.get('button[id=button]');
  
  // first test - passed
  it('can type in the name input', () => {
    nameInput().type('Michael Jordan').should('have.value', 'Michael Jordan');
  })

  // second test - passed
  it('can select multiple toppings', () => {
    topping1Input().check();
    topping2Input().check();
    topping3Input().check();
    topping4Input().check();
  })

  // third test - passed
  it('submit the form', () => {
    nameInput().type('Michael Jordan').should('have.value', 'Michael Jordan');
    sizeInput().select('Small').should('have.value', 'small');
    sauceInput().check('marinara').should('have.value', 'marinara');
    topping1Input().check();
    submitBtn().click();
  })
})