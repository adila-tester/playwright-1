import BasePage from "../basepage";

export default class LoginPage extends BasePage{
    static enterusername() {
        throw new Error('Method not implemented.');
    }
    static enterpassword() {
        throw new Error('Method not implemented.');
    }
    static clickbutton() {
        throw new Error('Method not implemented.');
    }
    
    private readonly usernamefield = this.page.locator('[id="user-name"]');
    private readonly passwordfield = this.page.locator('[id="password"]');
    private readonly loginbutton = this.page.locator('[id="login-button"]');

  
    async enterusername(username:string){
        await this.enterTextToElement(this.usernamefield , username);
    }
    
    async enterpassword(password:string){
        await this.enterTextToElement(this.passwordfield , password);
    }
    
    async clickbutton(){
        await this.clickElement(this.loginbutton);
    }

    
}
