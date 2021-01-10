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

    get userNavButton() {
        return $('#userNavButton');
    }

    get logoutButton() {
        return $('#userNav-menuItems > a[title="Logout"]');
    }
}

export default new HomePage();
