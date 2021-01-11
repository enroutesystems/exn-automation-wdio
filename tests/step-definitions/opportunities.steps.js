import { When } from 'cucumber';
import { opportunitiesPO } from '../page-objects/index';

When(/^clicks on the new opportunities button$/, () => {
    opportunitiesPO.newOpportunitiesButton.waitForEnabled();
    opportunitiesPO.newOpportunitiesButton.click();
});

When(/^fills new opportunities form$/, () => {
    opportunitiesPO.accountNameInput.waitForExist();
    opportunitiesPO.fillForm();
});

When(/^saves new opportunity form$/, () => {
    opportunitiesPO.saveFromButton.click();
});

When(/^opportunity details are displayed$/, () => {
    opportunitiesPO.createdAccountName.waitForExist();
    for (const value in opportunitiesPO.details) {
        expect(
            opportunitiesPO[`created${value.capitalize()}`].getText())
            .toEqual(opportunitiesPO.details[value]);
    }
});
