import BMIPage from './bmi.page';
import { generateId } from '../helpers/common';
import { quoteDetails } from '../helpers/constants';

class BMIExtremeManagerPage extends BMIPage {

    constructor() {
        super();
        this.quoteId;
        this.entryData = { ...quoteDetails, quoteName: `Test BMI Quote ${generateId()}` };
        this.totalPrice;
    }

    /**
     * Getters
     */

    // Inner tabs
    get quoteInformationInnerTab () { return $('li[aria-label="Quote Information"]') }
    get approvalInnerTab () { return $('li[aria-label="Approval"]') }
    get orderEntryChecklistInnerTab () { return $('li[aria-label="Order Entry Checklist"]') }

    // Quote Information Inner Tab
    get quoteNumber () { return $('#readonly_1_quoteNumber_q') }
    get name () { return $('input[id$="quoteName_q"]') }
    get description() { return $('input[id$="quoteDescription_q"]') }
    get status () { return $('#readonly_1_status_q') }
    get opportunityName () { return $('#readonly_1_opportunityName_q') }
    get preparedByName () { return $('input[id$="preparedByName_q"]') }
    get preparedByTitle () { return $('input[id$="preparedByTitle_q"]') }
    get preparedByEmail () { return $('input[id$="preparedByEmail_q"]') }
    
    // Quote Lines Inner Tab
    get addItemButtons () { return $$('.line-item-add-adhoc-item') }
    get skuInputs () { return $$('td[data-colid="1114587180"] > div > div > div > input') }
    get skuList () { return $$('td[data-colid="1114587180"] > div > div > span') }
    get percentOffInput () { return $$('td[data-colid="1114587186"] > div > div > div > input') }
    get discountTypeOptions () { return $$('td[data-colid="1114587185"] > div > div > div > select') }
    get priceOffInput () { return $$('td[data-colid="1127214225"] > div > div > div > input[type="hidden"]') }
    get accquisitionTotal () { return $('[id="0_lineItemColtotal_extendedAcquisitionPrice_l_1114587221"]') }

    // Order Entry Inner Tab
    get poNumber () { return $('#pONumber_q') }
    get poDate () { return $('#pODate_q') }
    get paymentTermsOptions () { return $('select[name="paymentTerms_q"]') }
    get orderManagerOptions () { return $('select[name="orderManager_q"]') }
    get submitOM () { return $('#submit_to_om') }
    

    // Quote Buttons
    get saveQuoteButton () { return $('#save') }
    get updateDiscountButton () { return $('#update_discounts') }
    get submitForApprovalButton () { return $('#submit_for_approval') }

    // Main Tab Elements
    get quoteLink() {
        return $(`tr[id="${this.quoteId.replace(/[^0-9.]/g, '')}"] > td > div > a`);
    }

    // Promotions Inner Tab
    get promosCheckbox () { return $$('div[id$="promotionsList_t"] input[type="checkbox"]') }

    /**
     * Methods
     */

    fillQuoteInformation () {
        this.name.setValue(this.entryData.quoteName);
        this.description.setValue(this.entryData.description);
    }

    fillQuoteList () {
        for (const [i, item] of this.entryData.table.items.entries()) {
            this.addItemButtons[i].click();
            browser.pause(300);
            this.skuInputs[i].setValue(item.sku);
        }

        this.saveQuoteButton.click();
        browser.pause(250);
        this.totalPrice = parseFloat(this.accquisitionTotal
            .getText().replace(/(\$||,)*/g, ''));
        
        for (const [i, item] of this.entryData.table.items.entries()) {
            this.discountTypeOptions[i].selectByVisibleText(item.discountType);
            browser.pause(300);

            switch (item.discountType) {
                case '%':
                    browser.execute(super.setValueHiddenElements, // script to execute
                        this.percentOffInput[i].selector, i, item.discountQuantity); // parameters
                    break;
                case '$':
                    browser.execute(super.setValueHiddenElements, // script to execute
                        this.priceOffInput[i].selector, i, item.discountQuantity); // parameters
                    break;
                default:
                    break;
            }
        }
    }

    switchToInnerTab (tabName) {
        tabName = tabName.toCamelCase();
        this[`${tabName}InnerTab`].click();
    }

    fillOrderEntry () {
        const date = new Date();

        this.entryData.orderEntryChecklist.poNumber = `${generateId()}-TEST`;
        this.entryData.orderEntryChecklist.poDate = date.toSFDateString('/');
        this.poNumber.setValue(this.entryData.orderEntryChecklist.poNumber);
        this.poDate.setValue(this.entryData.orderEntryChecklist.poDate);
        this.paymentTermsOptions.selectByVisibleText(this.entryData.orderEntryChecklist.paymentTerms);
        this.orderManagerOptions.selectByVisibleText(this.entryData.orderEntryChecklist.orderManager);
    }

}

export default new BMIExtremeManagerPage();
