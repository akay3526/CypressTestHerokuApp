/// <reference types = "cypress"/>

const { Runnable } = require("mocha");
import dashboardPage from "../../PageObjects/dashboardPage";
import dropdown from "../../PageObjects/dropdownPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("add remove elements", () => {
  it("add remove elements", () => {
    const DA = new dashboardPage();
    const DR = new dropdown();

    DA.NavigateToUrl();
    DA.ClickOnDropdownButton();
    DR.SelectOption1FromDropdown();
    DR.ValidateOption1Selected();
    DR.SelectOption2FromDropdown();
    DR.ValidateOption2Selected();
  });
});
