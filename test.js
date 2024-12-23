const { Builder, By, Key, until } = require('selenium-webdriver');

async function exampleTest() {
    // Membuat koneksi dengan Browser Driver
    let driver = await new Builder().forBrowser('chrome').build();

    //Exception handling & Conclusion
    try {
        //Buka URL di broswer
        await driver.get("https://www.google.com");

        //Mencari di search box
        let searchBox = await driver.findElement(By.name('q'));

        //Simulate user behavior typing "Hello World"
        await searchBox.sendKeys("Hello World!", Key.RETURN);
        await driver.wait(until.elementLocated(By.id('result-stats')), 10000);

        let title = await driver.getTitle();
        console.log(`Page Title is: ${title}`);
    } finally {
        //Tutup Browser
        await driver.quit();
    }
}

exampleTest();