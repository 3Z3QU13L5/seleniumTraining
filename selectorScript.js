const {Builder, By, Key, Util} = require("selenium-webdriver");

class SelectorScript {
    constructor (BaseURL, Browser) {
        this.baseURL = BaseURL;
        this.browser = Browser;
    }

    async radioButton (radioNo){
        var selectors;
        var itemID;
        
        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL);

        await (await driver.findElement(By.id('vfb-7-' + radioNo))).click();

        for(var i=1;i<=3;i++){
            itemID = await (await driver.findElement(By.id('vfb-7-' + i))).getAttribute('value');
            selectors = await (await driver.findElement(By.id('vfb-7-' + i))).isSelected();
            selectors? console.log(itemID + ' was selected') : console.log(itemID + ' was not selected')
        }

        await driver.close();
    }

    async checkBox (){
        var selectors;
        var itemID;

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get(this.baseURL);

        await (await driver.findElement(By.id('vfb-6-2'))).click();

        for(var i=0;i<3;i++){
            itemID = await (await driver.findElement(By.id('vfb-6-' + i))).getAttribute('value');
            selectors = await (await driver.findElement(By.id('vfb-6-' + i))).isSelected();
            selectors? console.log(itemID + ' was selected, now unselected') : console.log(itemID + ' was not selected, now selected');
            await (await driver.findElement(By.id('vfb-6-' + i))).click(); 
        }

        await driver.close()
    }

    async selectOption(){
        var dropDown;
        var options;

        let driver = await new Builder().forBrowser(this.browser).build();
        await driver.get('http://demo.guru99.com/test/newtours/register.php');

        dropDown = await driver.findElement(By.name('country'));
        options = await dropDown.findElements(By.css('option')); 
        
        await options.forEach(this.selection); 

        var selectedOption;

        for(var i=0; i<options.length; i++){
            if (await options[i].isSelected()){
                selectedOption = await options[i].getText();
            }
        }

        console.log(selectedOption);

        selectedOption === "ANTARCTICA" ? console.log('Selection was succesfull!') : console.log('Selection was not succesfull!');

        await driver.close();
    }

    async selection(option){
        var text = ''
        text = await option.getText();
        text == "ANTARCTICA" ? await option.click() : false;
    }

    async main(){
        await this.radioButton(2);
        await this.checkBox();
        await this.selectOption();
    }
}

module.exports = new SelectorScript('http://demo.guru99.com/test/radio.html', 'firefox');