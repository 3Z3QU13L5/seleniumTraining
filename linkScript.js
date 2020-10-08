const {Builder, By, Key, Until} = require("selenium-webdriver"); 
var urls = ['http://demo.guru99.com/test/link.html','http://demo.guru99.com/test/accessing-link.html','http://demo.guru99.com/test/newtours/', 'http://demo.guru99.com/test/block.html']


class LinkScript {
    constructor(BaseURL, Browser){
        this.baseURL = BaseURL;
        this.browser = Browser;
    }

    async exactLinkText(){
        console.log("Accessing links using Exact Text Match");
        var link;
        var pageTitle;

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[0]);

        link = await driver.findElement(By.linkText('click here'))
        console.log('URL: ' + await link.getAttribute('href'));
        await link.click();

        pageTitle = await driver.getTitle();
        console.log('Page title is: ' + pageTitle);

        await driver.close();
    }

    async incompleteLinkText() {
        console.log("Accessing links using Partial Text Match");
        var link;
        var pageTitle;

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[1]);

        link = await driver.findElement(By.partialLinkText('here'));
        console.log('URL: ' + await link.getAttribute('href'));
        await link.click();

        pageTitle = await driver.getTitle();
        console.log('Page title is: ' + pageTitle);

        await driver.close();
    }

    async sensitivityLinkText() {
        console.log('Case-sensitivity for Link Text');
        var linkLowerCase;
        var linkUpperCase;

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[2]);

        linkLowerCase = await driver.findElement(By.partialLinkText('egis'));
        console.log('URL: ' + await linkLowerCase.getAttribute('href'));
        console.log('Complete Link Text: ' + await linkLowerCase.getText());

        linkUpperCase = await driver.findElement(By.partialLinkText('EGIS'));
        console.log('URL: ' + await linkUpperCase.getAttribute('href'));
        console.log('Complete Link Text: ' + await linkUpperCase.getText());

        await driver.close();
    }

    async blockLinkText() {
        console.log('Links Outside and Inside a Block');
        var insideLink;
        var outsideLink;
        var pageTitle = '';

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[3]);

        insideLink = await driver.findElement(By.partialLinkText('Inside'));
        console.log('URL: ' + await insideLink.getAttribute('href'));
        await insideLink.click();

        pageTitle = await driver.getTitle();
        console.log('Page title is: ' + pageTitle);

        await driver.navigate().back();

        outsideLink = await driver.findElement(By.partialLinkText('Outside'));
        console.log('URL: ' + await outsideLink.getAttribute('href'));
        await outsideLink.click();

        pageTitle = await driver.getTitle();
        console.log('Page title is: ' + pageTitle);

        await driver.close();
    }

    async main(){
        await this.exactLinkText();
        await this.incompleteLinkText();
        await this.sensitivityLinkText();
        await this.blockLinkText();
    }
}

module.exports = new LinkScript(urls, 'chrome'); 