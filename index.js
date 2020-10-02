const {Builder, By, Key, util} = require("selenium-webdriver");
const firstScript = require("./firstScript");

function main (){

    console.log("Verifying Amazone Best Sellers Page's Title:"); 
    firstScript.webDriverCode("https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers", "Amazon.com Best Sellers: The most popular items on Amazon", );

    console.log("Extract tag name Facebook element with ID = email:");
    firstScript.locatingElement("http://facebook.com", "email");

}

main();
