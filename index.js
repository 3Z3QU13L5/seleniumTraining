//const {Builder, By, Key, util} = require("selenium-webdriver");
const firstScript = require("./firstScript");
const locatorScript = require("./locatorScript");
const formScript = require("./formScript");
const selectorScript = require("./selectorScript");
const imageScript = require("./imageScript");
const linkScript = require("./linkScript");
const actionScript = require("./actionScript");
const fileScript = require("./fileScript");
const xpathScript = require("./xPathScript");


async function main (){

    //First Touch of Selenium during the guru99 course
    //await firstScript.Main();

    //Ways to locate an element, by className, cssSelector, Id, linkText, name, partialLinkText and xpath 
    //await locatorScript.main();

    //Forms WebElements: TextBox, Submit Button, sendkeys(), clear() and click()
    //await formScript.main();

    //Selection of Checkbox, Radio Button and Drop-Down Box options.
    //await selectorScript.main();

    // Accessing Image Links
    //await imageScript.clickImage();

    //Accessing links using By.linkText and By.partialLinkText
    //await linkScript.main();

    //Action class: Handling Keyboard & Mouse events
    //await actionScript.main();

    //Uploading and Downloading files
    //await fileScript.main();
    
    //Using XPath to handle complex and dynamic elements in Selenium
    await xpathScript.main(); 
}

main();
