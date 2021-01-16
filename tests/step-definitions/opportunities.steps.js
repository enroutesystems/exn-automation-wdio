import { When } from 'cucumber';
import { opportunitiesPO, lookupPO } from '../page-objects/index';

const details = require('../helpers/constants').opportunityDetails;
const generateId = require('../helpers/common').generateId;
const date = new Date();
const selectLookupValue = (item = 0) => {
    const [ formWindow, lookupWindow ] = browser.getWindowHandles();
    browser.switchToWindow(lookupWindow);
    browser.switchToFrame(1);
    browser.pause(1000);
    lookupPO.table.waitForExist();
    lookupPO.list[item].click();

    browser.switchToWindow(formWindow);
};

When(/^selects "([^"]*)" new record type$/, (type) => {
    details.recordType = type;
    opportunitiesPO.recordTypeOptions.waitForExist();
    opportunitiesPO.recordTypeOptions.selectByVisibleText(type);
    opportunitiesPO.continueButton.click();
});

When(/^fills new opportunities form$/, () => {
    details.opportunityName = `Test Op ${generateId()}`;
    details.closeDate = date.toExnDateString();
    opportunitiesPO.accountNameInput.waitForExist();
    opportunitiesPO.opportunityNameInput.setValue(details.opportunityName);
    opportunitiesPO.accountNameLookup.click();
    browser.pause(200);

    // Select Account from lookup tab
    selectLookupValue(1);

    opportunitiesPO.accountNameInput.waitForExist();
    details.accountName = opportunitiesPO.accountNameInput.getValue();
    opportunitiesPO.leadSourceOptions.selectByVisibleText(details.leadSource);
    opportunitiesPO.stageOptions.selectByVisibleText(details.stage);
    opportunitiesPO.closeDateInput.setValue(details.closeDate);
    opportunitiesPO.forecastCategoryOptions.selectByVisibleText(details.forecastCategory);
    opportunitiesPO.geographyOptions.selectByVisibleText(details.geography);
    opportunitiesPO.regionOptions.selectByVisibleText(details.region);
    opportunitiesPO.subregionOptions.selectByVisibleText(details.subregion);
    opportunitiesPO.fulfillmentOptions.selectByVisibleText(details.fulfillment);
    opportunitiesPO.contactLookup.click();
    browser.pause(200);

    // Select contact from list
    selectLookupValue();

    opportunitiesPO.accountNameInput.waitForExist();
    details.contact = opportunitiesPO.contactNameInput.getValue();
    opportunitiesPO.ledByOptions.selectByVisibleText(details.ledBy);
    opportunitiesPO.eRateDealOptions.selectByVisibleText(details.eRateDeal);
});

When(/^saves new opportunity form$/, () => {
    opportunitiesPO.saveFromButton.click();
});

When(/^opportunity details are displayed$/, () => {
    opportunitiesPO.createdAccountName.waitForExist();
    for (const prop in details) {
        let value = opportunitiesPO[`created${prop.capitalize()}`].getText();
        if (prop === 'recordType') value = value.replace(' [Change]', '');
        else if (prop === 'closeDate') continue;
        expect(value).toEqual(details[prop]);
    }
});
