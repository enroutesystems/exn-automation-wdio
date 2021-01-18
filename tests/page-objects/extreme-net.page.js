import Page from './page';

export default class ExtremeNetworksPage extends Page {
    
    constructor() {
        super();
    }

    get currentTab() {
        return $('.commerce-sidebar-current');
    }

    get logoutButton() {
        return $('img[src="/img/navigation/logout.gif"]');
    }

    get myProfileButton() {
        return $('img[src="/img/navigation/profile.gif"]');
    }

    get homeButton() {
        return $('img[src="/img/navigation/home.gif"]');
    }

    get errorMessageBox() {
        return $('#actionErrorMessagesBox');
    }
}
