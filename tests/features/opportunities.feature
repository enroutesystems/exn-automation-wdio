@opportunities
Feature: Opportunities

    Scenario: User is able to create a new Opportunity
        Given a user with "admin" role is on the "opportunities" tab
        When clicks on the new opportunities button
        And fills new opportunities form
        And saves new opportunity form
        Then opportunity details are displayed
