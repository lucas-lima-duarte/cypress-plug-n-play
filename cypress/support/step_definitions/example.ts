import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I want to do something$/, () => {
	cy.log("It works!")
});
