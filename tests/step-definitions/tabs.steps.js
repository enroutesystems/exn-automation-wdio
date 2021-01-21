import { Then } from 'cucumber';
import { homePO } from '../page-objects/index';

Then(/^"([^"]*)" elements are displayed$/, (tabName) => {
    homePO.userNavButton.waitForExist();

    const expected = `${tabName.capitalizeAllWords()} Tab - Selected`;

    expect(homePO[`${tabName.toCamelCase()}Tab`].getAttribute('title')).toEqual(expected)
});