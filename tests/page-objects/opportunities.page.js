import Page from './page';

class OpportunitiesPage extends Page {

    constructor() {
        super();
        this.details = {
            opportunityName: 'New Opp1',
            accountName: 'Account Name',
            recordType: '',
            leadSource: '',
            stage: '',
            closeDate: new Date().toLocaleDateString()
        };
    }

    get newOpportunitiesButton() {
        return $('.pbButton > input[title = "New"]');
    }

    get saveFromButton() {
        return $('#topButtonRow input[title="Save"]');
    }

    get opportunityNameInput() {
        return $('#opp3');
    }

    get accountNameInput() {
        return $('#opp4');
    }

    get recordTypeOptions() {
        return $('#opp5');
    }

    get leadSourceOptions() {
        return $('#opp6');
    }

    get stageOptions() {
        return $('#opp11');
    }

    get closeDateInput() {
        return $('#opp9');
    }

    get createdOpportunityName() {
        return $('#opp3_ileinner');
    }

    get createdAccountName() {
        return $('#opp4_ileinner');
    }

    get createdRecordType() {
        return $('#opp5_ileinner');
    }

    get createdLeadSource() {
        return $('#opp6_ileinner');
    }

    get createdStage() {
        return $('#opp11_ileinner');
    }

    get createdCloseDate() {
        return $('#opp9_ileinner');
    }

    fillForm() {
        this.opportunityNameInput.setValue(this.details.opportunityName);
        this.accountNameInput.setValue(this.details.accountName);
        this.recordTypeOptions.selectByIndex(1);
        this.details.recordType = this.recordTypeOptions.getValue();
        this.leadSourceOptions.selectByIndex(2);
        this.details.leadSource = this.leadSourceOptions.getValue();
        this.stageOptions.selectByIndex(1);
        this.details.stage = this.stageOptions.getValue();
        this.closeDateInput.setValue(this.details.closeDate);
    }
}

export default new OpportunitiesPage();
