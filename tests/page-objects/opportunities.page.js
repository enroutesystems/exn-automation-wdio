import SalesforcePage from './sales-force.page';
import { generateId } from '../helpers/common';
import { opportunityDetails } from '../helpers/constants';
class OpportunitiesPage extends SalesforcePage {

    constructor() {
        super();
        this.entryData = { ...opportunityDetails, opportunityName: `Test Op ${generateId()}` };
    }

    /**
     * Getters
     */

    // Opportunities Main
    get newOpportunitiesButton () { return $('.pbButton > input[title = "New"]'); }
    get continueButton () { return $('input[title="Continue"]'); }
    get opportinitiesList () { return $$('tr.dataRow > th > a'); }

    // Opportunities Form
    get saveFromButton () { return $('#topButtonRow input[title="Save"]'); }
    get opportunityNameInput () { return $('#opp3'); }
    get accountNameInput () { return $('#opp4_lkold'); }
    get accountId () { return $('#opp4_lkid'); }
    get accountNameLookup () { return $('#opp4_lkwgt'); }
    get recordTypeOptions () { return $('#p3'); }
    get leadSourceOptions () { return $('#opp6'); }
    get stageOptions () { return $('#opp11'); }
    get forecastCategoryOptions () { return $('select[id="00N80000005BM7k"]'); }
    get closeDateInput () { return $('#opp9'); }
    get geographyOptions () { return $('select[id="00N30000000cWa2"]'); }
    get regionOptions () { return $('select[id="00N30000000cSd5"]'); }
    get subregionOptions () { return $('select[id="00N34000005gZyJ"]'); }
    get contactLookup () { return $('a[id="CF00NV0000001jBze_lkwgt"]'); }
    get contactNameInput () { return $('input[id="CF00NV0000001jBze_lkold"]'); }
    get contactId () { return $('input[id="CF00NV0000001jBze_lkid"]'); }
    get ledByOptions () { return $('select[id="00N34000006Dcg4"]'); }
    get eRateDealOptions () { return $('select[id="00N8000000591DW"]'); }
    get fulfillmentOptions () { return $('select[id="00N30000000c9AQ"]'); }

    // Opportinity Details
    get createdOpportunityName () { return $('#opp3_ileinner'); }
    get createdAccountName () { return $('#opp4_ileinner'); }
    get createdRecordType () { return $('#RecordType_ileinner'); }
    get createdLeadSource () { return $('#opp6_ileinner'); }
    get createdStage () { return $('#opp11_ileinner'); }
    get createdForecastCategory () { return $('div[id="00N80000005BM7k_ileinner"]'); }
    get createdGeography () { return $('div[id="00N30000000cWa2_ileinner"]'); }
    get createdRegion () { return $('div[id="00N30000000cSd5_ileinner"]'); }
    get createdSubregion () { return $('div[id="00N34000005gZyJ_ileinner"]'); }
    get createdContact () { return $('div[id="CF00NV0000001jBze_ileinner"]'); }
    get createdFulfillment () { return $('div[id="00N30000000c9AQ_ileinner"]'); }
    get createdCloseDate () { return $('#opp9_ileinner'); }
    get createdLedBy () { return $('div[id="00N34000006Dcg4_ileinner"]'); }
    get createdERateDeal () { return $('div[id="00N8000000591DW_ileinner"]'); }
    get newQuoteButton () { return $('input[value="New Quote"]'); }

    // Lookup
    get table () { return $('.list') }
    get list () { return $$('tr > th > a') }

    /**
     * Methods
     */

    openLatestOpportunity () {
        const [ latestOp ] = this.opportinitiesList;

        latestOp.click();
    }

    fillOpportunityFrom (item = 0) {
        const date = new Date();
        this.entryData.closeDate = date.toSFDateString();
        this.opportunityNameInput.setValue(this.entryData.opportunityName);
        this.accountNameLookup.click();
        browser.pause(200);

        // Select Account from lookup tab
        super.selectLookupValue(1);

        this.accountNameInput.waitForExist();
        this.entryData.accountName = this.accountNameInput.getValue();
        this.leadSourceOptions.selectByVisibleText(this.entryData.leadSource);
        this.stageOptions.selectByVisibleText(this.entryData.stage);
        this.closeDateInput.setValue(this.entryData.closeDate);
        this.forecastCategoryOptions.selectByVisibleText(this.entryData.forecastCategory);
        this.geographyOptions.selectByVisibleText(this.entryData.geography);
        this.regionOptions.selectByVisibleText(this.entryData.region);
        this.subregionOptions.selectByVisibleText(this.entryData.subregion);
        this.fulfillmentOptions.selectByVisibleText(this.entryData.fulfillment);
        this.contactLookup.click();
        browser.pause(200);
    
        // Select contact from list
        super.selectLookupValue();
    
        this.accountNameInput.waitForExist();
        this.entryData.contact = this.contactNameInput.getValue();
        this.ledByOptions.selectByVisibleText(this.entryData.ledBy);
        this.eRateDealOptions.selectByVisibleText(this.entryData.eRateDeal);
    }

    selectRecordType (type = 'Extreme') {
        this.entryData.recordType = type;
        this.recordTypeOptions.selectByVisibleText(type);
        this.continueButton.click();
    }

}

export default new OpportunitiesPage();
