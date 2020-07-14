const protractor = require('protractor');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

const config = {
    // allScriptsTimeout: 11000,

    // ----- The test framework -----
    framework: 'jasmine',

    capabilities: {
        browserName: 'chrome',
    },

    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
        // Remove protractor dot reporter; we are using a custom reporter instead
        print: function() {
        },
    },

    // Keep max browsers running to 1 because
    // Multiple browsers running at once was pausing/failing for no reason
    maxSessions: 1,

    // Set no globals to true to avoid jQuery '$' and protractor '$'
    // Collisions on the global namespace.
    noGlobals: true,

    async beforeLaunch() {
        await require('ts-node').register('tsconfig.json');
    },

    onPrepare: () => {
        // Use `jasmine-spec-reporter` as the spec result reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
        }));

        // Set browser window
        protractor.browser.waitForAngularEnabled(false);
        protractor.browser.manage().window().setSize(1024, 968);
    },

    // params: {
    //     baseUrl: '',
    // },

    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['tests/**/*spec.ts'],

    // If want to target a specific spec file (eg while creating a new one)
    // specs: [ 'specs/login/loginGlobalHeader.spec.js' ],

};

module.exports = { config };
