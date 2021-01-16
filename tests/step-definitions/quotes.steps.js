import { Given, When, Then } from 'cucumber';
import { opportunitiesPO, quotePO } from '../page-objects/index';

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
    quotePO.quoteNameInput.waitForExist();
});

When(/^fills preliminar form data$/, () => {
    quotePO.quoteNameInput.setValue(`Test BMI Quote ${generateId()}`);
    details.name = quotePO.quoteNameInput.getValue();
    quotePO.descriptionInput.setValue(details.description);
});

When(/^fills sku list$/, () => {
    quotePO.updateDiscountButton.waitForExist();

    // Add items to table
    for (const [i, item] of details.table.items.entries()) {
        quotePO.addItemButtons[i].click();
        browser.pause(250);
        quotePO.skuInputs[i].setValue(item.sku);
    }

    quotePO.saveQuoteButton.click();
    browser.pause(250);

    // Add discounts
    for (const [i, item] of details.table.items.entries()) {
        quotePO.discountTypeOptions[i].selectByVisibleText(item.discountType);
        browser.pause(250);

        switch (item.discountType) {
            case '%':
                browser.execute(setValueHiddenElements, // script to execute
                    quotePO.percentOffInput[i].selector, i, item.discountQuantity); // parameters
                break;
            case '$':
                browser.execute(setValueHiddenElements, // script to execute
                    quotePO.priceOffInput[i].selector, i, item.discountQuantity); // parameters
                break;
            default:
                break;
        }
    }
});

When(/^selects "([^"]*)" discount$/, (discount) => {
    details.table.totalPrice = parseFloat(quotePO.accquisitionTotal
        .getText().replace(/(\$||,)*/g, ''));

    // TODO: select discount
});

Then(/^prices listed are updated$/, () => {
    const totalPriceUpdated = parseFloat(quotePO.accquisitionTotal
        .getText().replace(/(\$||,)*/g, ''));

    expect(details.table.totalPrice).toBeGreaterThan(totalPriceUpdated);
});

Then(/^submites quote form approval$/, () => {
    quotePO.submitForApprovalButton.click();

    expect(quotePO.errorMessageBox.isDisplayed()).toBeFalsy();
});
