const {Builder, By, Key, util} = require("selenium-webdriver");

class FormScript {

    constructor (BaseURL, Browser){
        this.baseURL = BaseURL;
        this.browser = Browser;
    };

    async inputText (close) {
        
        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL);

        //Find the email text field using the id locator & enter text
        await driver.findElement(By.id('email')).sendKeys("abcd@gmail.com");
        //Find the password text field using name id locator & enter text
        await driver.findElement(By.name('passwd')).sendKeys("abcdefghijkl");

        close ? await driver.close() : console.log("Input Complete Succesfully!!!");

        return driver;
    } 

    async clearInput() {
        let driver = await this.inputText(0);

        //Find the email text field using the id locator & clear text
        await driver.findElement(By.id('email')).clear();
        //Find the password text field using the name locator & clear text
        await driver.findElement(By.name('passwd')).clear();

        console.log("Input Erased Succesfully!!!")

        await driver.close(); 
    }

    async pressButtons (){
        let driver = await this.inputText(0);

        await (await driver.findElement(By.id('SubmitLogin'))).click();
        await (await driver.findElement(By.css('div.error-copy'))).isDisplayed ? 
            console.log('Succesfully Logged in by click') : console.log('Usues Logging in by click');

        await driver.close();

    }

    async main(){
        await this.inputText(1);
        await this.clearInput();
        await this.pressButtons();
    }

}

module.exports = new FormScript ('http://demo.guru99.com/test/login.html', 'firefox');