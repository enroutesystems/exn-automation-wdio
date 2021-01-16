import Page from './page';

class QuotePage extends Page {

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

    get quoteNameInput() {
        return $('#quoteName_q');
    }

    get descriptionInput() {
        return $('#quoteDescription_q');
    }

    get saveQuoteButton() {
        return $('#save');
    }

    get updateDiscountButton() {
        return $('#update_discounts');
    }

    get addItemButtons() {
        return $$('.line-item-add-adhoc-item');
    }

    get skuInputs() {
        return $$('td[data-colid="1114587180"] > div > div > div > input');
    }

    get discountTypeOptions() {
        return $$('td[data-colid="1114587185"] > div > div > div > select');
    }

    get percentOffInput() {
        return $$('td[data-colid="1114587186"] > div > div > div > input');
    }

    get priceOffInput() {
        return $$('td[data-colid="1127214225"] > div > div > div > input[type="hidden"]');
    }

    get accquisitionTotal() {
        return $('[id="0_lineItemColtotal_extendedAcquisitionPrice_l_1114587221"]');
    }

    get submitForApprovalButton() {
        return $('#submit_for_approval');
    }

    get errorMessageBox() {
        return $('#actionErrorMessagesBox');
    }
}

export default new QuotePage();
