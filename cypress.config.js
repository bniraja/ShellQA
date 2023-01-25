const { defineConfig } = require('cypress');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  viewportWidth: 1980,
  viewportHeight: 1060,
  reporter: "cypress-multi-reporters",
  e2e: {
    async setupNodeEvents(on, config) {
      chromeWebSecurity: false,  
      config.appUrl =  "http://www.shellenergy.nl";
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
  },
});
