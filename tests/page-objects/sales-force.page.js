import Page from './page';

export default class SalesforcePage extends Page {

    constructor() {
        super();
        this.baseUrl = process.env.BASE_URL;
    }

    /**
     * Getters
     */

    // Login Container
    get username () { return $('.username') }
    get password () { return $('.password') }
    get loginButton() { return $('#Login') }

    // Header
    get userNavButton () { return $('#globalHeaderNameMink') }
    get logoutButton () { return $('a[title="Logout"]') }
    get setupButton () { return $('a[title="Setup"]') }
    get contactInfoButton () { return $('a[title="Edit Contact Info"]') }
    get helpButton () { return $('a[title="Help & Training (New Window)"]') }

    // Tabs
    get homeTab () { return $('#home_Tab > a') }
    get reportsTab () { return $('#report_Tab > a') }
    get dashboardsTab () { return $('#Dashboard_Tab > a') }
    get opportunitiesTab () { return $('#Opportunity_Tab > a') }
    get contactsTab () { return $('#Contact_Tab > a') }
    get sapContractsTab () { return $('a[title^="SAP Contracts Tab"]') }
    get serviceContractsTab () { return $('#ServiceContract_Tab > a') }
    get chatterTab () { return $('#Chatter_Tab > a') }
    get applicationFeaturesTab () { return $('a[title^="Application Features Tab"]') }
    get reconDetailsTab () { return $('a[title^="RECON Details Tab"]') }
    get posDetailsTab () { return $('a[title^="POS Details Tab"]') }

    // Side Container
    get bmiLink() {
        return $('.linksModule:nth-child(6) > div > ul > li > a');
    }

    /**
     * Methods
     */

    login (role = 'sales') {
        const user = role.toUpperCase().replace(' ','_');

        this.openPage();
        this.username.waitForExist();
        this.username.setValue(process.env[`${user}_USERNAME`]);
        this.password.setValue(process.env[`${user}_PASSWORD`]);
        this.loginButton.click();
        this.userNavButton.waitForExist({timeout: 2000});
    }

    logout () {
        if (!browser.getUrl().includes(this.baseUrl)) {
            this.openPage();
            this.userNavButton.waitForExist({timeout: 2000});
        }
        
        if (this.userNavButton.isDisplayed()) {
            this.userNavButton.click();
            this.logoutButton.click();
        }
    }

    switchToTab (tabName = 'home') {
        tabName = tabName.toCamelCase();

        this[`${tabName}Tab`].waitForExist();
        this[`${tabName}Tab`].click();
    }

    selectLookupValue (item = 0) {
        const [ formWindow, lookupWindow ] = browser.getWindowHandles();
        browser.switchToWindow(lookupWindow);
        browser.switchToFrame(1);
        browser.pause(1000);
        this.table.waitForExist();
        this.list[item].click();
    
        browser.switchToWindow(formWindow);
    }

}
