const assert = require("assert");
const { After, Before } = require("@cucumber/cucumber");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { Given, When, Then } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");

const sleep = async (t) => await driver.sleep(t);
const sleepTime = 1000;

let driver;
Before(async () => {
  driver = await new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().addArguments("--headless"))
    .build();
});

After(async () => {
  await driver.quit();
});

Given("I navigate to npmjs.com", async () => {
  await driver.get("https://npmjs.com");
  await sleep(sleepTime);
});

When("I search for selenium-webdriver", async () => {
  await driver
    .findElement(By.css('input[type="search"]'))
    .sendKeys("selenium-webdriver");
  await driver.findElement(By.css('button[type="submit"]')).click();

  await sleep(sleepTime);
});

When("I click on exact match link", async () => {
  await driver
    .findElement(By.css('a[href*="/package/selenium-webdriver"]'))
    .click();
  await sleep(sleepTime);
});

Then("I check the lastest version", async () => {
  const versionText = await driver
    .findElement(By.css("#top>div>span"))
    .getText();
  assert(versionText.includes("4.7.1"));
  await sleep(sleepTime);
});
