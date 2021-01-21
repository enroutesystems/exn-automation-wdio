import Page from './page';

export default class BMIPage extends Page {
    
    constructor() {
        super();
        this.baseUrl = process.env.BASE_URL_BMI
    }

    /**
     * Getters
     */

    // Login Container
    get username () { return $('#username') }
    get password () { return $('#psword') }
    get loginButton () { return $('#log_in')}

    // Navigation Bar
    get homeButton () { return $('img[src="/img/navigation/home.gif"]') }
    get myProfileButton () { return $('img[src="/img/navigation/profile.gif"]') }
    get logoutButton() { return $('img[src="/img/navigation/logout.gif"]') }

    // Tabs
    get extremeManagerTab () { return $('') }
    get homePageTab () { return $('') }
    get salesforceTab () { return $('') }
    get quoteManagerTab () { return $('') }
    get currentTab () { return $('.commerce-sidebar-current') }

    // Other elements
    get errorMessageBox () { return $('#actionErrorMessagesBox') }

    /**
     * Methods
     */

    logout () {
        if (browser.getUrl().includes(this.baseUrl) &&
            this.homeButton.isDisplayed()) {
            this.logoutButton.click();
            this.username.waitForExist();
        }
    }

    setValueHiddenElements (querySelector, i, value) {
        const elements = document.querySelectorAll(querySelector);
        elements[i].value = value;
    }

}
