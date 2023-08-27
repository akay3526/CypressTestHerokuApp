/// <reference types = "cypress"/>

const { Runnable } = require("mocha");
import addRemoveElements from "../../PageObjects/addRemoveElementsPage";
import dashboardPage from "../../PageObjects/dashboardPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("add remove elements", () => {
  it("add remove elements", () => {
    const DA = new dashboardPage();
    const AR = new addRemoveElements();

    DA.NavigateToUrl();
    DA.ClickOnaddRemoveElementsButton();
    AR.ClickOnAddButton();
    AR.ValidateNewCreatedButton();
    AR.ClickOnDeleteButton();
    AR.ValidateDeleteButtonRemoved();
  });
});
