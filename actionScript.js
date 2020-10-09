const {Builder, By, Key, Until, Action, Actions} = require("selenium-webdriver");
const URLs = ['http://demo.guru99.com/test/newtours/','http://www.facebook.com']

class ActionScript {
    constructor(BaseURL, Browser) {
        this.browser = Browser;
        this.baseURL = BaseURL;
    }

    async basicAction() {
        console.log('Doing a hover over action');
        var linkHome;
        var tdHome;

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[0]);

        const actions = driver.actions({bridge: true});
        var selector = 'td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1)';

        linkHome = await driver.findElement(By.linkText('Home'));
        tdHome = await driver.findElement(By.css('tr.mouseOut:nth-child(1)'));

        console.log(await tdHome.getTagName());
        var color = await tdHome.getCssValue("background-color");
        console.log('Before hover color: ' + color );
        
        await actions.move({duration: 5000, origin: linkHome, x:0, y:0}).perform();
        
        tdHome = await driver.findElement(By.css('tr.mouseOver'));
        var color = await tdHome.getCssValue("background-color");
        console.log('Before hover color: ' + color);

        await driver.close();
    }

    async multiplesActions() {
        console.log('Building a Series of Multiple Actions');
        var email;
        var allActions;

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[1]);

        const actions = driver.actions({bridge: true});
        email = await driver.findElement(By.name('email'));

        allActions = actions.move({duration: 5000, origin: email, x:0, y:0})
        .click()
        .keyDown(Key.SHIFT)
        .sendKeys("hello")
        .keyUp(Key.SHIFT)
        .doubleClick(email)
        .contextClick();

        await allActions.perform();

        console.log("Actions perfomed Succesfully!")
        await driver.close();
    }

    async main() {
        await this.basicAction();
        await this.multiplesActions();
    }
}

module.exports = new ActionScript(URLs, 'firefox'); 