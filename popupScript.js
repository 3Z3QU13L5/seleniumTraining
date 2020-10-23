const {Builder, By, Key, Until} = require("selenium-webdriver");
const URLs = ['http://demo.guru99.com/test/delete_customer.php','http://demo.guru99.com/popup.php']

class PopUpScript {
    constructor(BaseURL, Browser){
        this.baseURL = BaseURL;
        this.browser = Browser;
    }
    async alertsHandle (){
        console.log('Handling Alerts with Selenium:');
        var alertMessage;
        
        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[0]);

        await driver.findElement(By.name('cusid')).sendKeys('53920');
        await (await driver.findElement(By.name('submit'))).click();

        // To Click on the 'Cancel' button of the alert
        //await (await driver.switchTo().alert()).dismiss();
        
        // To Ccapture the alert message
        alertMessage = await (await driver.switchTo().alert()).getText();
        console.log(alertMessage);
        
        // To Click on the 'Ok' button of the alert
        await (await driver.switchTo().alert()).accept();

        // To send date to alert box
        //await (await driver.switchTo().alert()).sendKeys("Text");

        await driver.close();

    }
    async popUpHandle (){
        console.log('Handling PopUps with Selenium:');
        var mainWindow, windows;
        
        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[1]);

        mainWindow = await driver.getWindowHandle();
        await driver.manage().window().maximize();
        await (await driver.findElement(By.xpath("//*[contains(@href,'popup.php')]"))).click();

        windows = await driver.getAllWindowHandles();
        windows.forEach(await this.newWindowHandle());

        //await driver.switchTo().window(mainWindow);
    }

    async newWindowHandle(element, index){
        console.log({element,index});
        if (index!=0){
            console.log({element,index})
            await driver.switchTo().window(element);
            await driver.findElement(By.name('emailid'))
            //.sendKeys('gaurav.3n@gmail.com');

            //await (await driver.findElement(By.name('btnLogin'))).click();

            //await driver.close();
        }
    }
    async main() {
        await this.alertsHandle();
        //await this.popUpHandle();
        
    }
}

module.exports = new PopUpScript(URLs,'firefox');