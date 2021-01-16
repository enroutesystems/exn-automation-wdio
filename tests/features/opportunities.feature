@opportunities
Feature: Opportunities

    Scenario: User is able to create a new Opportunity
        Given a user with "sales" role is on the "opportunities" tab
        When clicks on "new opportunities" button
        And selects "Extreme" new record type
        And fills new opportunities form
        And saves new opportunity form
        Then opportunity details are displayed
