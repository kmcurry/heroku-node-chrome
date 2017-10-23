# heroku-node-chrome
A reference app for getting headless chrome to run in Node on Heroku

* git clone https://github.com/kmcurry/heroku-node-chrome.git
* cd heroku-node-chrome
* heroku create --buildpack heroku/nodejs
* heroku buildpacks:add --index 1 https://github.com/heroku/heroku-buildpack-google-chrome.git
* heroku buildpacks:add --index 2 https://github.com/heroku/heroku-buildpack-chromedriver.git
* git push heroku master
* open in browser: https://[random app name].herokuapp.com/test
* you should see "Done" in the browser if it ran successfully

See also: [Alex Viderman's phantomjs version](https://github.com/AlexViderman/heroku-selenium)
