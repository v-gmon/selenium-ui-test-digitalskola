const { By } = require("selenium-webdriver");

//cartpage
class CartPage {
    constructor(driver){
        this.driver = driver;
    }

    async isAddedToCart(){
        let addToCartButton = await this.driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"));
        await addToCartButton.click();
        let cartItem = await this.driver.findElement(By.xpath("//span[@class='shopping_cart_badge']"));
        return cartItem.getText();
    }
}

module.exports = CartPage;