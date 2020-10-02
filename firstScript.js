const {Builder, By, Key, util} = require("selenium-webdriver");

 class firstScript {
     constructor( browser){
        this.browser = browser; 
     }
     async webDriverCode(baseURL, expectedTitle) {

        //Declaration of variables
        var actualTitle = "";
    
        //declare and build webdriver instance
        let driver = await new Builder().forBrowser(this.browser).build();
    
        //launch browser and direct it to the base URL
        await driver.get(baseURL);
    
        //get the value of the page title
        actualTitle = await driver.getTitle();
    
        //Compare both title and print if it passed or failed
        actualTitle === expectedTitle? console.log( "Test Passed!"):console.log("Test Failed!");
    
        //Close the browser
        await driver.close();
    }

    async locatingElement ( baseURL, elementId){
        
        //Declaration of variables
        var tagName = "";

        //declare and build webdriver instance
        let driver = await new Builder().forBrowser(this.browser).build();

        //launch browser and direct it to the base URL
        await driver.get(baseURL);

        //extract the tag name of particular element by id
        tagName = await driver.findElement(By.id(elementId)).getTagName();
        
        //print the tag name of element
        console.log(tagName);

        //Close driver
        await driver.close();
    }
 }

 module.exports = new firstScript("firefox");