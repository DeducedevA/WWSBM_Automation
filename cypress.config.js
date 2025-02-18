const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Specify the pattern for test files
    specPattern: 'cypress/e2e/MYWWSBM/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,js,jsx,ts,tsx}',
    // specPattern: 'cypress/e2e/Practice/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,js,jsx,ts,tsx}',
    // specPattern: 'cypress/e2e/Xpropeller/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,js,jsx,ts,tsx}',

    // Add reporter configuration
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory where reports will be generated
      overwrite: false, // Don't overwrite existing reports
      html: true, // Generate an HTML report
      json: true, // Generate a JSON report
    },

    // Enable video recording
    video: true, // Enables video recording for headless mode
    videosFolder: 'cypress/reports/videos', // Directory to save video recordings
    videoCompression: 32, // Compress videos (lower value = higher quality)

    // Only upload videos of failed tests
    videoUploadOnPasses: false, // Save videos only for failing tests

    setupNodeEvents(on, config) {
      // Add the cypress-mochawesome-reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // Implement any additional node event listeners if needed
      // Example: Adding a custom plugin or task
    },
  },
});
