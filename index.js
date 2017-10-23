var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var builder = new webdriver.Builder()
.withCapabilities({
  'browserName': 'chrome',
  'ignore-ssl-errors': true,
  'ssl-protocol': 'any',
  'chromeOptions': {
    'binary': '/app/.apt/usr/bin/google-chrome',
    'args': ['--headless', '--disable-gpu']
  }
});

var express = require('express');
var app = express();

var port = process.env.PORT || 14000;
var By = webdriver.By;

app.get('/test', function(req, res) {

  var driver = builder.build();

  driver.get('https://www.google.com/');
  driver.findElement(By.name('q')).sendKeys('webdriver');
  driver.findElement(By.id('lst-ib')).sendKeys(webdriver.Key.ENTER);
  driver.wait(function() {
    return driver.getTitle().then(function(title) {
      console.log(title);
      return title === 'webdriver - Google Search';
    });
  }, 5000).then(function() {
    res.status(200).send('Done');
  }, function(error) {
    res.status(200).send(error);
  });
  driver.quit();
});

app.listen(port, function() {
  console.log('Example app listening on port: ', port)
});
