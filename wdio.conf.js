require('dotenv').config();

let tags = process.env.CUCUMBER_TAGS !== undefined && process.env.CUCUMBER_TAGS !== ''
    ? process.env.CUCUMBER_TAGS + ' and ' : '';
const features = process.env.FEATURES
    ? process.env.FEATURES.split(/\s/) : ['./tests/features/*.feature'];

tags = tags + 'not (@ignore or @pending)';

exports.config = {
    runner: 'local',
    specs: features,
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--disable-web-security'
            ]
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: process.env.BASE_URL,
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    logLevel: 'error',
    cucumberOpts: {
        require: ['./tests/step-definitions/*.js',
            './tests/helpers/prototypes.js'],
        backtrace: false,
        requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: tags,
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}
