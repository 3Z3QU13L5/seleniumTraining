//const {Builder, By, Key, util} = require("selenium-webdriver");
const firstScript = require("./firstScript");
const locatorScript = require("./locatorScript");

async function main (){

    //First Touch of Selenium during the guru99 course
    //await firstScript.Main();

    //Ways to locate an element, by className, cssSelector, Id, linkText, name, partialLinkText and xpath 
    await locatorScript.main();
}

main();
