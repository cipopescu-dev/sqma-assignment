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

Given("I navigate to selenium.dev", async () => {
  await driver.get("https://www.selenium.dev");
  await sleep(sleepTime);
});

When("I click on selenium-webdriver", async () => {
  await driver
    .findElement(By.css(".selenium-button-container>.selenium-webdriver"))
    .click();
  await sleep(sleepTime);
});

Then("I check the docs version", async () => {
  const versionText = await driver
    .findElement(By.css(".breadcrumb>div"))
    .getText();
  assert(versionText.includes("4"));
  await sleep(sleepTime);
});
