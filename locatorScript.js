const {Builder, By, Key, util} = require("selenium-webdriver");

class locatorScript {
    constructor (BaseURL, Browser) {
        this.baseURL = BaseURL;
        this.browser = Browser; 
    }

    async locatingID (elementID) {
        
        var tagName = '';
        var text = '';
        var element;
        
        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL);
        element = await (await driver.findElement(By.id(elementID))).getAttribute('name');
        tagName = await driver.findElement(By.id(elementID)).getTagName();
        text = await driver.findElement(By.id(elementID)).getText();

        console.log('Element of Name ' + element + ' and tagName ' + tagName + ' contains the text: ' + text);

        await driver.close();
    }

    async locatingName(elementName) {
        var tagName = '';
        var text = '';
        var element = '';

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL);
        element = await (await driver.findElement(By.name(elementName))).getAttribute('data-testid');
        tagName = await (await driver.findElement(By.name(elementName))).getTagName();
        text = await (await driver.findElement(By.name(elementName))).getText();

        console.log('Element of Name ' + elementName + ' and tagName ' + tagName + ' contains the text: ' + text + ' and data-testid: ' + element);

        await driver.close();
    }

    async locatingLinkText (elementLinkText) {
         
        var role = '';
        var element = '';

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL);
        role = await (await driver.findElement(By.linkText(elementLinkText))).getAttribute('role');
        element = await (await driver.findElement(By.linkText(elementLinkText))).getAttribute('data-testid');

        console.log('Element role: ' + role + ' should be: button');
        console.log('Element data-testid: ' + element + ' should be: open-registration-form-buttom');

        await driver.close();
    }

    async locatingCssSelector (elementCssSelector, type, name) {

        var element = '';

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL);
        
        element = await (await driver.findElement(By.css(elementCssSelector))).getAttribute('name');
        console.log( type + ' Element name ' + element + ' should be ' + name);

        await driver.close();
    }

    async main (){
        await this.locatingID("email");
        await this.locatingName('login');
        await this.locatingLinkText('Crear cuenta nueva');
        await this.locatingCssSelector('button#u_0_b', '(Tag#Id)', 'login');
        await this.locatingCssSelector('button._42ft', '(Tag.Class)', 'login');
        await this.locatingCssSelector('button[data-testid]', '(Tag[attribute=value])', 'login');
    }

}

module.exports = new locatorScript ("http://facebook.com", 'firefox');