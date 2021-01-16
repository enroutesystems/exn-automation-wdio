/**
 *  Hooks
 */

import { After } from 'cucumber';
import { homePO, loginPO, quotePO } from '../page-objects/index'

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
    quotePO.currentTab.waitForExist();
    quotePO.logoutButton.click();
});
