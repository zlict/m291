const webdriver = require("selenium-webdriver");
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
// const SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;

let o = new chrome.Options();
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false });

// visit a webpage
// return await this.driver.get(theUrl);

// wait and find a specific element with it's id
// await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
// return await this.driver.findElement(By.id(id));

// wait and find a specific element with it's name
// await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
// return await this.driver.findElement(By.name(name));

// fill input web elements
// return await el.sendKeys(txt);

async function basicExample() {
  try {
    const driver = new Builder()
      .setChromeOptions(o)
      .forBrowser('chrome')
      .build();


    await driver.get('https://google.com');

    const title = await driver.getTitle();
    console.log("The title is: " + title);

    const qElement = await driver.wait(until.elementLocated(By.name('q')));
    await qElement.sendKeys("Rickroll\n");

    await driver.sleep(2000);

    const linkElement = await driver.wait(until.elementLocated(By.css('#search a')));[0]
    linkElement.click();

    await driver.sleep(10000);
    driver.quit();
  }

  catch (err) {
    console.error('Something went wrong!\n', err.stack, '\n');
    driver.quit();
  }

}

basicExample();
