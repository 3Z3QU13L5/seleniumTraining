const {Builder, By, Key, Until} = require("selenium-webdriver"); 
const URLs = ['http://demo.guru99.com/test/upload/','http://demo.guru99.com/test/yahoo.html'];

class FileScript {
    constructor(BaseURL, Browser){
        this.baseURL = BaseURL;
        this.browser = Browser;
    }

    async uploadFile(){
        console.log('Uploading Files:');
        var uploadElement;
        var messege = '';

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[0]);

        uploadElement = await driver.findElement(By.id("uploadfile_0"));
        uploadElement.sendKeys("C:\\Users\\Miguel\\Desktop\\codeTrainings\\seleniumTraining\\fileToUpload.html");

        await (await driver.findElement(By.id('terms'))).click();
        await (await driver.findElement(By.name('send'))).click();
        //messege =  (await driver.findElement(By.css('h3#res.demo > center')));
        //console.log({messege});
       // messege.includes('has been successfully uploaded.') ?  console.log('Successfully uploaded!!!') : console.log('Error!!!');

        await driver.close();
    }

    async downloadFile() {
        console.log('Downloading a File:');
        var douloadElement;
        var sourceLocation;

        let driver = await  new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL[1]);

        douloadElement = await driver.findElement(By.id('messenger-download')); 
        sourceLocation = await douloadElement.getAttribute('href');
        //var wget_command = 'cmd /c C:\\Wget\\wget.exe -P D: --no-check-certificaate ' + sourceLocation;
        console.log(sourceLocation);
        driver.navigate().to(sourceLocation);
    }

    async main(){
        await this.uploadFile();
        await this.downloadFile();
    }
}

module.exports = new FileScript(URLs, 'firefox');