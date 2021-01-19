import Page from './page';

class HomePage extends Page {

    constructor() {
        super();
    }

    get tabContainer() {
        return $('#tabContainer');
    }

    get opportunitiesTab() {
        return $('#Opportunity_Tab > a');
    }

    get homeTab() {
        return $('#home_Tab > a');
    }

    get userNavButton() {
        return $('#globalHeaderNameMink');
    }

    get logoutButton() {
        return $('ul.zen-options[role="menu"] > li > a[title="Logout"]');
    }

    get bmiLink() {
        return $('.linksModule:nth-child(6) > div > ul > li > a');
    }
}

export default new HomePage();
