const {Builder, By, Key, util} = require("selenium-webdriver");

async function main() {

    //Declaration of variables
    var baseURL = "https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers";
    var expectedTitle = "Amazon.com Best Sellers: The most popular items on Amazon";
    var actualTitle = "";

    //declare and build webdriver instance
    let driver = await new Builder().forBrowser("firefox").build();

    //launch browser and direct it to the base URL
    await driver.get(baseURL);

    //get the value of the page title
    actualTitle = await driver.getTitle();

    //Compare both title and print if it passed or failed
    actualTitle === expectedTitle? console.log( "Test Passed!"):console.log("Test Failed!");

    //Close the browser
    await driver.close();
}

main();
