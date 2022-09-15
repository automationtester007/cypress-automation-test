const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    retries: { "runMode": 2, "openMode": 2 },
    chromeWebSecurity: false,
    projectId: "4ff94c",
    specPattern: "cypress/e2e/",
    viewportWidth: 2000,
    viewportHeight: 1260,
    defaultCommandTimeout: 30000,
    experimentalSourceRewriting: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/report"
    },
    setupNodeEvents(on, config) {
      // bind to the event we care about
      const {GoogleSocialLogin} = require('cypress-social-logins').plugins

      on('task', {

        GoogleSocialLogin: GoogleSocialLogin

      })
    },
  }
})
