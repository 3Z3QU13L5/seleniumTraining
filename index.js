const {Builder, By, Key, util} = require("selenium-webdriver");
async function example() {
    let driver = await Builder().forBrowser("firefox").build();
}