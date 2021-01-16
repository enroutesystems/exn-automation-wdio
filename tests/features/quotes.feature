@quotes
Feature: Quotes

    Scenario: User is able to create a new Quote
        Given a user with "sales" role is on the "opportunities" tab
        And opens an opportunity
        When clicks on "new quote" button
        And quote form is displayed
        And fills preliminar form data
        And clicks on "save quote" button
        And fills sku list
        And clicks on "save quote" button
        And clicks on "update discount" button
        And selects "P10310" discount
        And clicks on "update discount" button
        Then prices listed are updated
        And submites quote form approval
