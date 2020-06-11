exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided
  chromeDriver: 'C:/Users/iolmos/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_81.0.4044.69.exe',
  seleniumServerJar: 'C:/Users/iolmos/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  specs: [
        //'./JSFilesLocation/09_Actions.js',
        './JSFilesLocation/12_Frames.js'
        ],
  capabilities: {
  browserName: 'chrome',
  'goog:chromeOptions': {w3c: false},
  }
}