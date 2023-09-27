# Automated Website Testing using CodeceptJS and Playwright

This project contains automated tests for the FC Dynamo Kyiv website . The tests are written using the CodeceptJS framework and the Playwright browser automation tool for web application testing.

## Prerequisites

Before you start running the tests, make sure you have the following components installed:

- [Node.js](https://nodejs.org/) (minimum version 12)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)

## Installation

1. Clone this repository to your local computer:

git clone https://github.com/drozdik29/website_autotest_js

2. Navigate to the project directory:
cd website_autotest_js

3. Install project dependencies:
npm install

## Test Configuration
Before you can run the tests, you need to configure parameters for  website and tests in the codecept.conf.js file. Modify the following parameters to match your setup:

// codecept.conf.js

module.exports = {
  // ...
  helpers: {
    Playwright: {
      url: 'https://fcdynamo.com/', // Your website's URL
      show: true, // Show the browser during testing (change to false for headless mode)
      browser: 'chromium', // The browser you want to use (chromium, firefox, webkit)
    },
  },
  // ...
};

## Running Tests
To run automated tests, enter the following command:

npx codeceptjs run
## Additional Information

CodeceptJS(https://codecept.io/) - Official CodeceptJS website for detailed documentation and usage examples.
Playwright(https://playwright.dev/) - Official Playwright website for documentation and usage examples.
## Author
Max Drozdovsky