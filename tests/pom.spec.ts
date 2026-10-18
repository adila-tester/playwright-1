import { Page } from '@playwright/test';
import{test,expect} from '../fixtures/fixture';
import LoginPage from './pages/loginpages/loginpage';
import productpage from './pages/product/product';
import * as testdata from './testdata/testdata.json';
let page: Page;
let loginpage: LoginPage;
let product: productpage;

test.describe('suite 1',()=>{
    test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState('domcontentloaded');

    loginpage = new LoginPage(page);
    product = new productpage(page);
})

test.afterEach(async()=>{
      await page.close();
})

test('E2E',async({})=>{

    await page.goto('https://www.saucedemo.com/');
    await loginpage.enterusername(testdata.username);
    await loginpage.enterpassword(testdata.password);
    await loginpage.takescreenshot('./tests/screenshots/loginpage.png');
    await loginpage.clickbutton();
    await expect(page).toHaveURL(/inventory\.html/);
    await product.clickaddtocartbtn();
    await product.takescreenshot('./tests/screenshots/productpage.png');
    await product.clickoncartBtn();
    await product.takescreenshot('./tests/screenshots/cartpage.png');
    

})


})

test('outside suite @smoke',async({})=>{
    console.log('outside suite smoke');
})

test('outside suite @sanity',async({})=>{
    console.log('outside suite sanity');
})

test('outside suite @smoke2',async({})=>{
    console.log('outside suite smoke 2');
})