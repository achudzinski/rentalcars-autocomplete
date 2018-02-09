exports.config = {
    specs: ['specs/**/*.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:8081/app',
    framework: 'jasmine',
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }
};
