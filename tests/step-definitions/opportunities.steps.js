import { When } from 'cucumber';
import { opportunitiesPO } from '../page-objects/index';

When(/^selects new "([^"]*)" record type$/, (type) => {
    opportunitiesPO.recordTypeOptions.waitForExist();
    opportunitiesPO.selectRecordType(type);
});

When(/^fills new opportunities form$/, () => {
    opportunitiesPO.accountNameInput.waitForExist();
    opportunitiesPO.fillOpportunityFrom();
});

When(/^saves new opportunity form$/, () => {
    opportunitiesPO.saveFromButton.click();
});

When(/^opportunity details are displayed$/, () => {
    opportunitiesPO.createdAccountName.waitForExist();
    for (const prop in opportunitiesPO.entryData) {
        let value = opportunitiesPO[`created${prop.capitalize()}`].getText();
        if (prop === 'recordType') value = value.replace(' [Change]', '');
        expect(value).toEqual(opportunitiesPO.entryData[prop]);
    }
});
