/**
 *  Hooks
 */

import { After } from 'cucumber';
import { homePO, loginPO, exnQuotePO } from '../page-objects/index'

After({ tags: 'not @quotes' },() => {
    // Logout
    homePO.tabContainer.waitForExist({timeout: 2000});
    homePO.userNavButton.click();
    homePO.logoutButton.waitForDisplayed();
    homePO.logoutButton.click();
    loginPO.usernameInput.waitForExist();
});

After({ tags: '@quotes' },() => {
    // Logout
    exnQuotePO.currentTab.waitForExist();
    exnQuotePO.logoutButton.click();
    browser.url(process.env.BASE_URL);
    homePO.tabContainer.waitForExist({timeout: 2000});
    homePO.userNavButton.click();
    homePO.logoutButton.waitForDisplayed();
    homePO.logoutButton.click();
    loginPO.usernameInput.waitForExist();
});
