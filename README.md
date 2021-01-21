# Front end Testing Framework
This frameworks performs tests to Salesforce and BMI front end platforms using [WDIO API](https://webdriver.io/docs/api.html) framework and [Cucumber](https://cucumber.io/docs/guides/overview/).
## Setup
### Requirements
 - node v10.23.1 or higher
 - yarn (recommended, npm can also be used)
### Installation
Install modules by executing the following command
```
    yarn install
```

### Configure WDIO runner
WDIO runner is configured from the [wdio.conf.js](wdio.conf.js) file, see the [WDIO runner documentation](https://webdriver.io/docs/configurationfile.html) to understand the purpose of each property.

### Env Variables
Set the following variables in an .env file:
```
    BASE_URL={{base url}}
    BASE_URL_BMI={{base BMI url}}
    SALES_USERNAME={{sales email}}
    SALES_PASSWORD={{sales password}}
    SALES_APPROVER_USERNAME={{sales approver email}}
    SALES_APPROVER_PASSWORD={{sales approver password}}
```
Take [.env.example](.env.example) file as reference.

### Create a feature
Features are written using Gherkin, use the [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/) to write features in the [features](./tests/features/) folder.

### Create a step definition
Step definitions should be written in the [step-definitions](./tests/step-definitions/) folder and match Gherkin steps using regex. See [Step Definitions Reference](https://cucumber.io/docs/cucumber/step-definitions/) to start coding.

### Start Tests
To run the whole set of scenarios the following command could be used:
```
    yarn test
```

#### Run specific tags
Scenarios could have a tag inherited from the parent feature or their own tag:
```
@tag
Feature: Test feature

    @scenario_tag
    Scenario: Scenario decription
```

to run specific tags we can specify them separated by commas as shown below:
```
    CUCUMBER=@tag1,@tag2 yarn test
```
