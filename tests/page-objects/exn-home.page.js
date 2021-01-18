import ExtremeNetworksPage from './extreme-net.page';

class ExtremeHomePage extends ExtremeNetworksPage {

    constructor() {
        super();
    }

    get existingQuotesLink() {
        return $('#hpwrap > div > a');
    }
}

export default new ExtremeHomePage();
