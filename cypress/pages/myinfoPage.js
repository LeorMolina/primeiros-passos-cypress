class myinfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".-close", 
            submitButton: ".orangehrm-left-space"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, nickName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName); 
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate, ssnNumber, sinNumber){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber);
        
        
        cy.get('body').then($body => {
            if ($body.find(this.selectorsList().dateCloseButton).length) {
                cy.get(this.selectorsList().dateCloseButton).click({ force: true });
            }
        });
        
        cy.get(this.selectorsList().genericField).eq(7).clear({ force: true }).type(expiryDate, { force: true });
        
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber);
        cy.get(this.selectorsList().genericField).last().clear().type(sinNumber);
    }

    saveForm(){
        
        cy.contains('button', 'Save').should('be.visible').click({ force: true });
        cy.wait(3000); 
        cy.reload();
        cy.get(this.selectorsList().firstNameField).should('not.be.empty');
        cy.get(this.selectorsList().lastNameField).should('not.be.empty');
        cy.get('body').should('not.contain', 'Error').and('not.contain', 'Failed').and('not.contain', 'Unable to save');
        cy.log('Form save process completed - no errors detected, fields loaded');
    }

    fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }
    
}

export default myinfoPage
