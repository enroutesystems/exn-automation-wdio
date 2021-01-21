import BMIPage from './bmi.page';

class BMIHomePage extends BMIPage {

    constructor() {
        super();
    }

    /**
     * Getters
     */

    get existingQuotesLink() {
        return $('#hpwrap > div > a');
    }
}

export default new BMIHomePage();
