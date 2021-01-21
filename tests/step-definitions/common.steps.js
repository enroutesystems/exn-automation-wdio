import { Given, When } from 'cucumber';
import { homePO, bmiExtremeManagerPO, opportunitiesPO, bmiHomePO } from '../page-objects/index';

Given(/^a user with "([^"]*)" role is on the "([^"]*)" tab$/, (role, tab) => {
    homePO.login(role);
    homePO.switchToTab(tab);
});

When(/^clicks on "([^"]*)" "([^"]*)"$/, (name, type) => {
    name = name.toCamelCase();

    if (type === 'link') {
        if (homePO[`${name}Link`]) {
            homePO[`${name}Link`].click();
        } else {
            bmiHomePO.existingQuotesLink.click();
        }
    } else {
        if (opportunitiesPO[`${name}Button`]) {
            opportunitiesPO[`${name}Button`].click();
        } else {
            bmiExtremeManagerPO[`${name}Button`].click();
        }
    }
});
