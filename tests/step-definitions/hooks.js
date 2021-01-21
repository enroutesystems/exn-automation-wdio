/**
 *  Hooks
 */

import { After } from 'cucumber';
import { homePO, bmiExtremeManagerPO } from '../page-objects/index'

After(() => {
    // Logout
    bmiExtremeManagerPO.logout();
    homePO.logout();
});
