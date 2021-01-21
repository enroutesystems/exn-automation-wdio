@tabs
Feature: Salesforce tabs interaction

    Scenario Outline: User navigates to salesforce tabs
        Given a user with "sales" role is on the "<tabName>" tab
        Then "<tabName>" elements are displayed

        Examples: Tab names
        |        tabName       |
        |      dashboards      |
        |        chatter       |
        | application features |
