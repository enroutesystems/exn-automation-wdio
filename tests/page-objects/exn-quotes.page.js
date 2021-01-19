import ExtremeNetworksPage from './extreme-net.page';

class QuotePage extends ExtremeNetworksPage {

    constructor() {
        super();
        this.quoteId = '';
    }

    get quoteLink() {
        return $(`tr[id="${this.quoteId.replace(/[^0-9.]/g, '')}"] > td > div > a`);
    }

    get approvalTab() {
        return $('li[aria-label="Approval"]');
    }

    get orderEntryChecklistTab() {
        return $('li[aria-label="Order Entry Checklist"]');
    }

    get quoteNumber() {
        return $('#readonly_1_quoteNumber_q');
    }

    get quoteNameInput() {
        return $('#quoteName_q');
    }

    get quoteName() {
        return $('#readonly_1_quoteNumber_q');
    }

    get opportunityName() {
        return $('#readonly_1_opportunityName_q');
    }

    get descriptionInput() {
        return $('#quoteDescription_q');
    }

    get description() {
        return $('#readonly_1_quoteDescription_q');
    }

    get status() {
        return $('#readonly_1_status_q');
    }

    get preparedByNameInput() {
        return $('#preparedByName_q');
    }

    get preparedByName() {
        return $('#readonly_1_preparedByName_q');
    }

    get preparedByTitleInput() {
        return $('#preparedByTitle_q');
    }

    get preparedByTitle() {
        return $('#readonly_1_preparedByTitle_q');
    }

    get preparedByEmailInput() {
        return $('#preparedByEmail_q');
    }

    get preparedByEmail() {
        return $('#readonly_1_preparedByEmail_q');
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

    get skuList() {
        return $$('td[data-colid="1114587180"] > div > div > span');
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

    get promosCheckbox() {
        return $$('div[id$="promotionsList_t"] input[type="checkbox"]');
    }

    get accquisitionTotal() {
        return $('[id="0_lineItemColtotal_extendedAcquisitionPrice_l_1114587221"]');
    }

    get submitForApprovalButton() {
        return $('#submit_for_approval');
    }

    get poNumberInput() {
        return $('#pONumber_q');
    }

    get poDateInput() {
        return $('#pODate_q');
    }

    get paymentTermsOptions() {
        return $('select[name="paymentTerms_q"]');
    }

    get orderManagerOptions() {
        return $('select[name="orderManager_q"]');
    }

    get submitOMButton() {
        return $('#submit_to_om');
    }
}

export default new QuotePage();
