// An example configuration file.

exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'firefox'
    },

    baseUrl: 'http://localhost:4000',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['example_spec.js ', 'protractor_specs/**/*.js', 'protractor_specs/**/*.coffee'],


    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      onComplete: null,
      isVerbose: true,
      showColors: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 30000
    },

};
