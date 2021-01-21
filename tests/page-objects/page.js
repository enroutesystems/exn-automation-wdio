export default class Page {

    constructor() {
        this.baseUrl = '';
    }

    /**
     * Methods
     */

    openPage (path = '') {
        return browser.url(`${this.baseUrl}${path}`)
    }

}
