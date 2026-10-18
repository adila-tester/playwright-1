import{test as baseTest }from '@playwright/test';

import loginpage from '../tests/pages/loginpages/loginpage';
import product from '../tests/pages/product/product';

type pages = {
    loginpage : loginpage;
    product : product;
}

const testpages= baseTest.extend<pages>({
    loginpage : async({page},use)=>{
        await use(new loginpage(page))
    },

   product : async({page},use)=>{
        await use(new product(page));
    }
})

export const test = testpages;
export const expect = testpages.expect;