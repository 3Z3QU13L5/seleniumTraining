//const {Builder, By, Key, util} = require("selenium-webdriver");
const firstScript = require("./firstScript");

async function main (){

    console.log("Verifying Amazone Best Sellers Page's Title:"); 
    await firstScript.webDriverCode("https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers", "Amazon.com Best Sellers: The most popular items on Amazon", );

    //Ways to locate an element, by className, cssSelector, Id, linkText, name, partialLinkText and xpath 
    console.log("Extract tag name Facebook element with ID = email:");
    await firstScript.locatingElement("http://facebook.com", "email");

}

main();
