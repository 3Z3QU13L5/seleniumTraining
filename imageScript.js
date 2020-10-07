const {Builder, By, Key, Util} = require("selenium-webdriver");

class ImageScript {
    constructor(BaseURL, Browser){
        this.baseURL = BaseURL;
        this.browser = Browser;
    }

    async clickImage(){
        var elementText = '';
        var pageTitle = '';
        var expectedTitle = 'Facebook - Entrar o registrarse';
        
        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL);

        elementText = await (await driver.findElement(By.css('i.fb_logo'))).getText();
        console.log('Clicking ' + elementText + ' logo');
        await (await driver.findElement(By.css('i.fb_logo'))).click();

        pageTitle = await driver.getTitle();
        pageTitle === expectedTitle ? console.log('Redirection completed Succesfully!') : console.log('An Issues Appeared in the Redirection!');
 
        await driver.close();
    }
}

module.exports = new ImageScript('http://facebook.com/login/identify?ctx=recover','firefox');