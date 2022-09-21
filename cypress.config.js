const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      (on, config) => {
        allureWriter(on, config);
        return config;
      };
    },

    specPattern:"cypress/integration/*/*.cy.js",
    defaultCommandTimeout: 8000,
    trashAssetsBeforeRuns:false,
    retries: {
      "runMode": 2,
      "openMode": 0
    }
  
  },
});
