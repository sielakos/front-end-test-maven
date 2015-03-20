exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: './selenium-server-standalone-2.39.0.jar',
  specs: ['e2e/*.spec.js'],
  capabilities: {
    'browserName': 'phantomjs'
  }
};