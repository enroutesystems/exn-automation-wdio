@quotes
Feature: Quotes

    Scenario: User is able to create a new Quote
        Given a user with "sales" role is on the "opportunities" tab
        And opens an opportunity
        When clicks on "new quote" "button"
        And quote form is displayed
        And fills preliminar form data
        And clicks on "save quote" "button"
        And fills sku list
        And clicks on "save quote" "button"
        And clicks on "update discount" "button"
        And selects "P10310" discount
        And clicks on "update discount" "button"
        Then prices listed are updated
        And submites quote form approval

    Scenario: User is unable to edit quote list
        Given a user with "sales approver" role is on the "home" tab
        When clicks on "bmi" "link"
        And clicks on "existing quotes" "link"
        And opens the previously created quote
        Then fields are no editable
        And fields match previously filled quote

    Scenario: User is able to approve quote
        Given a user with "sales approver" role is on the "home" tab
        When clicks on "bmi" "link"
        And clicks on "existing quotes" "link"
        And opens the previously created quote
        And navigates to "approval" quote tab
        And approves quote
        Then quote details are displayed

    Scenario: User submites quote to OM
        Given a user with "sales" role is on the "home" tab
        When clicks on "bmi" "link"
        And clicks on "existing quotes" "link"
        And opens the previously created quote
        And navigates to "order entry checklist" quote tab
        And fills PO fields
        Then order is submited
