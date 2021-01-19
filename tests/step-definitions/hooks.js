/**
 *  Hooks
 */

import { After } from 'cucumber';
import { homePO, loginPO, exnQuotePO } from '../page-objects/index'

After(() => {
    // Logout
    if (exnQuotePO.currentTab.isDisplayed()) {
        exnQuotePO.logoutButton.click();
        browser.url(process.env.BASE_URL);
        homePO.tabContainer.waitForExist({timeout: 2000});
    } else if (!homePO.tabContainer.isDisplayed()) {
        throw new Error('Unknown page object displayed');
    }
    homePO.userNavButton.click();
    homePO.logoutButton.waitForDisplayed();
    homePO.logoutButton.click();
    homePO.userNavButton.waitForDisplayed({ reverse: true});
});
