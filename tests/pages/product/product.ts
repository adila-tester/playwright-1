import BasePage from "../basepage";

export default class productpage extends BasePage{
    [x: string]: any;
    private readonly saucelabsBackpacktoCartBtn = this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');
    private readonly cartBtn = this.page.locator('[id="shopping_cart_container"]');

    async clickaddtocartbtn(){
        await this.clickElement(this.saucelabsBackpacktoCartBtn);
    }
    async clickoncartBtn(){
        await this.clickElement(this.cartBtn);
    }





}