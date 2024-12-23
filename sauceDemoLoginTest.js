const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function sauceDemoLoginTest(){
    // Membuat koneksi dengan Browser Driver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get("https://www.saucedemo.com");

        //Masukkan Username dan Password
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys('secret_sauce');

        //Click Button Login
        await driver.findElement(By.xpath("//input[@id='login-button']")).click();

        //Memastikan kita di dashboard dengan mencari Judul "Swag Labs"
        let titleText = await driver.findElement(By.xpath("//div[@class='app_logo']")).getText();
        assert.strictEqual(titleText.includes('Swag Labs'), true, "Title does not include 'Swag Labs'");
        //Memastikan kita di dashboard dengan mencari "Burger button"
        let menuButton = await driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']"));
        assert.strictEqual(await menuButton.isDisplayed(), true, "Menu Button is not visible");
        
        //Menambahkan item ke cart
        let addToCartButton = await driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"));
        await addToCartButton.click();
        //Memastikan item berhasil ditambahkan ke cart
        let cartItem = await driver.findElement(By.xpath("//span[@class='shopping_cart_badge']"));
        assert.strictEqual(await cartItem.getText(), '1', "Cart item is not 1");
        //console.log(await cartItem.getText());
                
    } finally {
        await driver.quit();
    }
}

sauceDemoLoginTest();