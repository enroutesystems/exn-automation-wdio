/**
 *  Hooks
 */

import { After } from 'cucumber';
import { homePO, loginPO } from '../page-objects/index'

After(() => {
    // Logout
    homePO.userNavButton.click();
    homePO.logoutButton.waitForDisplayed();
    homePO.logoutButton.click();
    loginPO.usernameInput.waitForExist();
});
