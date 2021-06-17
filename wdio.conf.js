exports.config = {
    services: [
        'chromedriver',
        [
            "image-comparison",
            {
                screenshotPath: "screens/",
                hideScrollBars: true // it is true by default, but anyway
            }
        ]
    ],

    runner: 'local',
    specs: [
        './tests/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        "goog:chromeOptions": {
            mobileEmulation: {
                deviceMetrics: {
                    pixelRatio: 2,
                    width: 360,
                    height: 640
                },
                userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/70.0.3538.75 Mobile/15E148 Safari/605.1"
            }
        }
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}



