import { Given, When } from 'cucumber';
import { loginPO, homePO, quotePO, opportunitiesPO } from '../page-objects/index';

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

When(/^clicks on "([^"]*)" button$/, (button) => {
    button = button.toCamelCase();
    browser.pause(1000);

    if (opportunitiesPO[`${button}Button`]) {
        opportunitiesPO[`${button}Button`].click();
    } else {
        quotePO[`${button}Button`].click();
    }
});
