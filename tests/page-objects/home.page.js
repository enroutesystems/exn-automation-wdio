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
        return $('#globalHeaderNameMink');
    }

    get logoutButton() {
        return $('ul.zen-options[role="menu"] >li > a[title="Logout"]');
    }
}

export default new HomePage();
