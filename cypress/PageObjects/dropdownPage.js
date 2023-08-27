class dropdown {
  //locators

  dropdownButton = "#dropdown";
  option1 = "#dropdown > option:nth-child(1)";
  option2 = "#dropdown > option:nth-child(2)";

  //methods

  SelectOption1FromDropdown() {
    cy.get(this.dropdownButton).select("Option 1");
  }

  ValidateOption1Selected() {
    cy.get(this.dropdownButton)
      .find('option[value="1"]')
      .should("have.attr", "selected")
      .and("equal", "selected");
    cy.log("Option 1 is selected");
  }

  SelectOption2FromDropdown() {
    cy.get(this.dropdownButton).select("Option 2");
  }

  ValidateOption2Selected() {
    cy.get(this.dropdownButton)
      .find('option[value="2"]')
      .should("have.attr", "selected")
      .and("equal", "selected");
    cy.log("Option 2 is selected");
  }
}

export default dropdown;
