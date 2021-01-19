import { Given, When, Then } from 'cucumber';
import { opportunitiesPO, exnQuotePO } from '../page-objects/index';

const details = require('../helpers/constants').quoteDetails;
const generateId = require('../helpers/common').generateId;
const setValueHiddenElements = (querySelector, i, value) => {
    const elements = document.querySelectorAll(querySelector);
    elements[i].value = value;
};

Given(/^opens an opportunity$/, () => {
    opportunitiesPO.newOpportunitiesButton.waitForExist();

    const [ latestOp ] = opportunitiesPO.opportinitiesList;

    latestOp.click();
});

When(/^quote form is displayed$/, () => {
    exnQuotePO.quoteNumber.waitForExist();
    exnQuotePO.quoteId = exnQuotePO.quoteNumber.getText();
    details.opportunityName = exnQuotePO.opportunityName.getText();
});

When(/^fills preliminar form data$/, () => {
    exnQuotePO.quoteNameInput.setValue(`Test BMI Quote ${generateId()}`);
    exnQuotePO.descriptionInput.setValue(details.description);
    details.quoteName = exnQuotePO.quoteNameInput.getValue();
});

When(/^fills sku list$/, () => {
    exnQuotePO.updateDiscountButton.waitForExist();

    // Add items to table
    for (const [i, item] of details.table.items.entries()) {
        exnQuotePO.addItemButtons[i].click();
        browser.pause(250);
        exnQuotePO.skuInputs[i].setValue(item.sku);
    }

    exnQuotePO.saveQuoteButton.click();
    browser.pause(250);

    // Add discounts
    for (const [i, item] of details.table.items.entries()) {
        exnQuotePO.discountTypeOptions[i].selectByVisibleText(item.discountType);
        browser.pause(250);

        switch (item.discountType) {
            case '%':
                browser.execute(setValueHiddenElements, // script to execute
                    exnQuotePO.percentOffInput[i].selector, i, item.discountQuantity); // parameters
                break;
            case '$':
                browser.execute(setValueHiddenElements, // script to execute
                    exnQuotePO.priceOffInput[i].selector, i, item.discountQuantity); // parameters
                break;
            default:
                break;
        }
    }
});

When(/^selects "([^"]*)" discount$/, (discount) => {
    details.table.totalPrice = parseFloat(exnQuotePO.accquisitionTotal
        .getText().replace(/(\$||,)*/g, ''));

    // TODO: select discount
});

When(/^opens the previously created quote$/, () => {
    exnQuotePO.quoteLink.waitForExist();
    exnQuotePO.quoteLink.click();
    exnQuotePO.quoteNumber.waitForExist();
});

When(/^navigates to "([^"]*)" quote tab$/, (tabName) => {
    tabName = tabName.toCamelCase();
    exnQuotePO[`${tabName}Tab`].click();
});

When(/^approves quote$/, () => {
    // TODO: button css selector
});

When(/^fills PO fields$/, () => {
    const date = new Date();

    details.orderEntryChecklist.poNumber = `${generateId}-TEST`;
    details.orderEntryChecklist.poDate = date.toExnDateString('/');
    exnQuotePO.poNumberInput.setValue(details.orderEntryChecklist.poNumber);
    exnQuotePO.poDateInput.setValue(details.orderEntryChecklist.poDate);
    exnQuotePO.paymentTermsOptions.selectByVisibleText(details.orderEntryChecklist.paymentTerms);
    exnQuotePO.orderManagerOptions.selectByVisibleText(details.orderEntryChecklist.orderManager);
});

Then(/^prices listed are updated$/, () => {
    const totalPriceUpdated = parseFloat(exnQuotePO.accquisitionTotal
        .getText().replace(/(\$||,)*/g, ''));

    expect(details.table.totalPrice).toBeGreaterThan(totalPriceUpdated);
});

Then(/^submites quote form approval$/, () => {
    exnQuotePO.submitForApprovalButton.click();

    expect(exnQuotePO.errorMessageBox.isDisplayed()).toBeFalsy();
});

Then(/^fields are no editable$/, () => {
    expect(exnQuotePO.quoteName.isDisplayed()).toBe(true);
    expect(exnQuotePO.description.isDisplayed()).toBe(true);
    expect(exnQuotePO.opportunityName.isDisplayed()).toBe(true);
    expect(exnQuotePO.preparedByName.isDisplayed()).toBe(true);
    expect(exnQuotePO.skuList[0].isDisplayed()).toBe(true);
});

Then(/^fields match previously filled quote$/, () => {
    expect(exnQuotePO.quoteNumber.getText()).toEqual(exnQuotePO.quoteId);
    expect(exnQuotePO.quoteName.getText()).toEqual(details.quoteName);
    expect(exnQuotePO.description.getText()).toEqual(details.description);
    expect(exnQuotePO.opportunityName.getText()).toEqual(details.opportunityName);
    expect(exnQuotePO.status.getText()).toEqual('Pending Approval');
});

Then(/^quote details are displayed$/, () => {
    // TODO: css selectors
});

Then(/^quote details are displayed$/, () => {
    exnQuotePO.submitOMButton.click();
    // TODO: add assertion
});
