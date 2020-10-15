const {Builder, By, Key, Until} = require("selenium-webdriver");

class xPathScript{
    constructor(BaseURL, Browser) {
        this.baseURL = BaseURL;
        this.browser = Browser;
    }

    async setDriver (){
        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL)
        return driver;
    }
    //Absolute xPath
    async absoluteXPath() {
        console.log('Using Absolute XPath :'); 
        let driver = await this.setDriver();
        var xpath = '/html/body/div[2]/div[1]/div/h4[1]/b';
        var webElement;
        
        console.log({xpath});
        webElement = await driver.findElement(By.xpath(xpath));
        await webElement.getText() == 'TESTING' ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');

        await driver.close();
    }
    //Relative xPath
    async relativeXPath() {
        console.log('Using Relative XPath :')
        let driver = await this.setDriver();
        var xpath = "//div[@class='featured-box cloumnsize1']//h4[1]//b[1]";
        var webElement;

        console.log({xpath})
        webElement = await  driver.findElement(By.xpath(xpath));
        await webElement.getText() == 'TESTING' ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');

        await driver.close(); 
    }
    async basicXPath() {
        console.log('Using XPath basics paths :')
        let driver = await this.setDriver();
        var xpath = ["//input[@name='uid']","//input[@type='text']","//label[@id='message23']","//input[@value='RESET']","//*[@class='barone']","//img[@src='/logo.png']","//a[@href='/software-testing.html']"];
        var verification = ['text','uid','User-ID must not be blank','btnReset','h2','Guru99 Demo Sites', 'Software Testing'];
        var webElement;

        for(var i=0;i<7;i++){
            console.log('{xpath: ' + xpath[i] + '}');
            webElement = await  driver.findElement(By.xpath(xpath[i]));
            switch (i) {
                case 0:
                    await webElement.getAttribute('type') == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');        
                    break;
                case 2:
                    await webElement.getText() == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');        
                    break;
                case 4:
                    await webElement.getTagName() == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');        
                    break;
                case 5:
                    await webElement.getAttribute('alt') == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');        
                    break;
                case 6:
                    await webElement.getText() == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');        
                    break;
                default:
                    await webElement.getAttribute('name') == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');
                    break;
            } 
            
        }
        await driver.close();
    }
    
    async containsXPath() {
        console.log('Using XPath that contains() :')
        let driver = await this.setDriver();
        var xpath = "//*[contains(@name,'btn')]";
        var verification;
        var webElement;

        console.log({xpath});
        webElement = await  driver.findElement(By.xpath(xpath));
        verification = await webElement.getAttribute('value');
        verification == 'RESET'|| verification == 'LOGIN'  ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');

        await driver.close();
    }

    async conditionsXPath() {
        console.log('Using XPath : ')
        let driver = await this.setDriver();
        var xpath = "//*[@type='submit' or @name='btnReset']";
        var verification;
        var webElement;

        console.log({xpath});
        webElement = await  driver.findElement(By.xpath(xpath));
        verification = await webElement.getAttribute('value');
        verification == 'RESET'|| verification == 'LOGIN' ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');

        xpath = "//input[@type='reset' and @name='btnReset']";
        console.log({xpath});
        webElement = await  driver.findElement(By.xpath(xpath));
        await webElement.getAttribute('value') == 'RESET' ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');

        await driver.close();
    }

    async withFunctionXPath() {
        console.log('Using XPath starts-with():')
        var webElement;
        let driver = await this.setDriver();
        var xpath = "//label[starts-with(@id,'message')]";

        console.log({xpath});
        webElement = await  driver.findElement(By.xpath(xpath));
        await webElement.getText() == 'User-ID must not be blank' ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');

        await driver.close();
    }
    async textXPath() {
        console.log('Using XPath text():')
        var webElement;
        let driver = await this.setDriver();
        var xpath = "//td[text()='UserID']";

        console.log({xpath});
        webElement = await  driver.findElement(By.xpath(xpath));
        await webElement.getText() == 'UserID' ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');

        await driver.close(); 
    }
    async axesMethodsXPath() {
        console.log('Using Axes Methods in XPath:')
        var webElement; 
        let driver = await this.setDriver();
        var xpath = ["//*[@type='text']//following::input[1]",
        "//*[text()='Enterprise Testing']//ancestor::div[1]",
        "//*[@id='java_technologies']//child::li[1]",
        "//*[@type='submit']//preceding::input[1]",
        "//*[@type='submit']//following-sibling::input[1]",
        "//*[@class='g-content g-particle']//parent::div",
        "//*[@type='password']//self::input",
        "//*[@id='java_technologies']//descendant::a"];
        var verification = ['password',
        'featured-box',
        'Software Testing',
        'password',
        'btnReset',
        'Python',
        'password',
        'Software Testing'];
        var axesMethods = ['Following', 'Ancestor', 'Child', 'Preceding', 'Following-sibling', 'Parent', 'Self', 'Descendant']

        for(var i=0; i<8; i++){
            console.log('Axes Methods: ' + axesMethods[i] + ' xpath ' + xpath[i]);
            webElement = await  driver.findElement(By.xpath(xpath[i]));
            switch (i) {
                case 1:
                    await webElement.getAttribute('class') == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');        
                    break;
                case 2:
                case 5:
                case 7:
                    await webElement.getText() == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');        
                    break;
                default:
                    await webElement.getAttribute('name') == verification[i] ? console.log('Successfully Found!!') : console.log('ERROR!! There may be a change on the path');
                    break;
            }
        }
        
        /*
        1. name = 'password'
        2. class = 'featured-box'
        3. text = 'Software Testing'
        4. name = 'password'
        5. name = 'btnReset'
        6. text = 'Python' ????
        7. name = 'password'
        8. text = 'Software Testing'
        */ 

        await driver.close();
    
    }

    async main() {
        await this.absoluteXPath();
        await this.relativeXPath();
        await this.basicXPath();
        await this.containsXPath();
        await this.conditionsXPath();
        await this.withFunctionXPath();
        await this.textXPath();
        await this.axesMethodsXPath();
    }

}

module.exports = new xPathScript('http://demo.guru99.com/test/selenium-xpath.html','firefox'); 