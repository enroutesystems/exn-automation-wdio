import Page from './page';

class LookupPage extends Page {

    constructor() {
        super();
    }

    get table() {
        return $('.list');
    }

    get list() {
        return $$('tr >th > a');
    }
}

export default new LookupPage();
