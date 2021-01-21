import { Given, When, Then } from 'cucumber';
import { opportunitiesPO, bmiExtremeManagerPO } from '../page-objects/index';

Given(/^opens an opportunity$/, () => {
    opportunitiesPO.newOpportunitiesButton.waitForExist();
    opportunitiesPO.openLatestOpportunity();
});

When(/^quote form is displayed$/, () => {
    bmiExtremeManagerPO.quoteNumber.waitForExist();
    bmiExtremeManagerPO.quoteId = bmiExtremeManagerPO.quoteNumber.getText();
    bmiExtremeManagerPO.entryData.opportunityName = bmiExtremeManagerPO.opportunityName.getText();
});

When(/^fills preliminar form data$/, () => {
    bmiExtremeManagerPO.fillQuoteInformation();
});

When(/^fills sku list$/, () => {
    bmiExtremeManagerPO.updateDiscountButton.waitForExist();
    bmiExtremeManagerPO.fillQuoteList();
});

When(/^selects "([^"]*)" discount$/, (discount) => {
    bmiExtremeManagerPO.totalPrice = parseFloat(bmiExtremeManagerPO.accquisitionTotal
        .getText().replace(/(\$||,)*/g, ''));

    // TODO: select discount
});

When(/^opens the previously created quote$/, () => {
    bmiExtremeManagerPO.quoteLink.waitForExist();
    bmiExtremeManagerPO.quoteLink.click();
    bmiExtremeManagerPO.quoteNumber.waitForExist();
});

When(/^navigates to "([^"]*)" quote tab$/, (tabName) => {
    bmiExtremeManagerPO.switchToInnerTab(tabName);
});

When(/^approves quote$/, () => {
    // TODO: button css selector
});

When(/^fills PO fields$/, () => {
    bmiExtremeManagerPO.fillOrderEntry();
});

Then(/^prices listed are updated$/, () => {
    const totalPriceUpdated = parseFloat(bmiExtremeManagerPO.accquisitionTotal
        .getText().replace(/(\$||,)*/g, ''));
    console.log(totalPriceUpdated, 'totalPriceUpdated');

    expect(bmiExtremeManagerPO.totalPrice).toBeGreaterThan(totalPriceUpdated);
});

Then(/^submites quote form approval$/, () => {
    bmiExtremeManagerPO.submitForApprovalButton.click();

    expect(bmiExtremeManagerPO.errorMessageBox).not.toBeDisplayed();
});

Then(/^fields are no editable$/, () => {
    expect(bmiExtremeManagerPO.name).not.toBeDisplayed();
    expect(bmiExtremeManagerPO.description).not.toBeDisplayed();
    expect(bmiExtremeManagerPO.opportunityName).not.toBeDisplayed();
    expect(bmiExtremeManagerPO.preparedByName).not.toBeDisplayed();
    expect(bmiExtremeManagerPO.skuList[0]).not.toBeDisplayed();
});

Then(/^fields match previously filled quote$/, () => {
    expect(bmiExtremeManagerPO.quoteNumber.getText()).toEqual(bmiExtremeManagerPO.quoteId);
    expect(bmiExtremeManagerPO.name.getText()).toEqual(bmiExtremeManagerPO.entryData.quoteName);
    expect(bmiExtremeManagerPO.description.getText()).toEqual(bmiExtremeManagerPO.entryData.description);
    expect(bmiExtremeManagerPO.opportunityName.getText()).toEqual(bmiExtremeManagerPO.entryData.opportunityName);
    expect(bmiExtremeManagerPO.status.getText()).toEqual('Pending Approval');
});

Then(/^quote details are displayed$/, () => {
    // TODO: css selectors
});

Then(/^order is submited$/, () => {
    bmiExtremeManagerPO.submitOMButton.click();
    // TODO: add assertion
});
