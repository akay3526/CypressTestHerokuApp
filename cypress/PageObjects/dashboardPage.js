class dashboardPage {
  //locators

  addRemoveElementsButton = "#content > ul > li:nth-child(2) > a";
  dropdownButton = "#content > ul > li:nth-child(11) > a";

  //methods
  NavigateToUrl() {
    cy.visit("https://the-internet.herokuapp.com/");
  }

  ClickOnaddRemoveElementsButton() {
    cy.get(this.addRemoveElementsButton).click();
  }

  ClickOnDropdownButton() {
    cy.get(this.dropdownButton).click();
  }
}

export default dashboardPage;
