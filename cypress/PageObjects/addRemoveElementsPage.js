class addRemoveElements {
  //locators

  addButton = "button";
  deleteButton = ".added-manually";

  //methods

  ClickOnAddButton() {
    cy.get(this.addButton).click();
  }

  ValidateNewCreatedButton() {
    cy.get(this.deleteButton).should("be.visible");
    cy.log("Delete button has been added");
  }

  ClickOnDeleteButton() {
    cy.get(this.deleteButton).click();
  }

  ValidateDeleteButtonRemoved() {
    cy.get(this.deleteButton).should("not.exist");
    cy.log("Delete button has been removed");
  }
}

export default addRemoveElements;
