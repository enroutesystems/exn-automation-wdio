import { Given, When } from 'cucumber';
import exnHomePage from '../page-objects/exn-home.page';
import { loginPO, homePO, exnQuotePO, opportunitiesPO, exnHomePO } from '../page-objects/index';

Given(/^a user with "([^"]*)" role is on the "([^"]*)" tab$/, (role, tab) => {
    const user = role.toUpperCase().replace(' ','_');
    loginPO.open();
    loginPO.usernameInput.waitForDisplayed();
    loginPO.usernameInput.setValue(process.env[`${user}_USERNAME`]);
    loginPO.passwordInput.setValue(process.env[`${user}_PASSWORD`]);
    loginPO.loginButton.click();
    browser.pause(1000);
    homePO[`${tab}Tab`].waitForExist();
    homePO[`${tab}Tab`].click();
});

When(/^clicks on "([^"]*)" "([^"]*)"$/, (name, type) => {
    name = name.toCamelCase();
    browser.pause(1000);

    if (type === 'link') {
        if (homePO[`${name}Link`]) {
            homePO[`${name}Link`].click();
        } else {
            exnHomePO.existingQuotesLink.click();
        }
    } else {
        if (opportunitiesPO[`${name}Button`]) {
            opportunitiesPO[`${name}Button`].click();
        } else {
            exnQuotePO[`${name}Button`].click();
        }
    }
});
