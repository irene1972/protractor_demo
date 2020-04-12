exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided
  chromeDriver: 'C:/Users/iolmos/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_81.0.4044.69.exe',
  seleniumServerJar: 'C:/Users/iolmos/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  specs: ['C:/Users/iolmos/protractor/Protractor_Demo/JSFilesLocation/test.js'],
  capabilities: {
	browserName: 'chrome'
  }
}