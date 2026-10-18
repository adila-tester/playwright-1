import {test, expect} from '@playwright/test';

test('textbox',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/login');

     await page.locator('[id="username"]').fill('tomsmith');
     await page.locator('[id="password"]').pressSequentially('SuperSecretPassword!',{delay:200});
     await page.locator('[id="password"]').press('Enter');

     await page.close();


});


test('click area',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/login');

     await page.locator('[id="username"]').fill('tomsmith');
     await page.locator('[id="password"]').pressSequentially('SuperSecretPassword!',{delay:200});
     await page.locator('[id="password"]').press('Enter');

     await page.close();


});


test('click',async({page})=>{

    await page.goto('https://play1.automationcamp.ir/mouse_events.html');

    await page.locator('[id="click_area"]').click();
    await expect(page.locator('[id="click_type"]')).toHaveText('Click');

    await page.locator('[id="click_area"]').dblclick();
    await expect(page.locator('[id="click_type"]')).toHaveText('Double-Click');

    await page.locator('[id="click_area"]').click({button: 'right'});
    await expect(page.locator('[id="click_type"]')).toHaveText('Right-Click');
    
    await page.close();


});

test('radio',async({page})=>{

    await page.goto('http://test.rubywatir.com/radios.php');
    await page.locator('[class="radioclass"]').click();
    await expect(page.locator('[id="radioId"]')).not.toBeChecked();

    


});

test('checkbox',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.locator('//*[@type="checkbox"][1]').uncheck();
    await expect(page.locator('//*[@type="checkbox"][1]')).not.toBeChecked();

    await page.locator('//*[@type="checkbox"][1]').check();
    await expect(page.locator('//*[@type="checkbox"][1]').isChecked()).toBeTruthy();


});


test('dropdown',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.selectOption('[id="dropdown"]', {

    value:"1"

    })
 await page.pause();

 await page.selectOption('[id="dropdown"]', {

     label:"Option 2"

    })
 await  page.pause();

 await page.selectOption('[id="dropdown"]', {

     index:1

    })
 await  page.pause();



});


test('multiselect',async({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/select-dropdown-demo/');
    await page.selectOption('[id="multi-select"]', [
     { value:"California" },
     { value:"Florida" },
     { value:"New Jersey" },
   
    ])
 await page.pause();

});

test('dynamicselect',async({page})=>{

    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('[role="combobox"]').click();
    await page.locator('//li[text()="India"]').click();

 await page.pause();

});

test('alerts',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog",async(alert)=>{
    const message= alert.message();
    expect((message)).toEqual('I am a JS Alert');
    await alert.accept();
    await expect(page.locator('[id="result"]')).toHaveText('You successfully clicked an alert ');
 });
 await page.locator('[onclick="jsAlert()"]').click();
 await page.pause();

});

test('confirmation ok',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog",async(alert)=>{
    const message= alert.message();
    expect((message)).toEqual('I am a JS Confirm');
    await alert.accept();
    await expect(page.locator('[id="result"]')).toHaveText('You clicked: Ok ');
 });
 await page.locator('[onclick="jsConfirm()"]').click();
 await page.pause();

});

test('confirmation cancel',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog",async(alert)=>{
    const message= alert.message();
    expect((message)).toEqual('I am a JS Confirm');
    await alert.dismiss();
    await expect(page.locator('[id="result"]')).toHaveText('You clicked: Cancel');
 });
 await page.locator('[onclick="jsConfirm()"]').click();
 await page.pause();

});

test.only('cancel prompt',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog",async(alert)=>{
    const message= alert.message();
    expect((message)).toEqual('I am a JS prompt');
    await alert.dismiss();
    await expect(page.locator('[id="result"]')).toHaveText('You entered: null');
 });
 await page.locator('[onclick="jsPrompt()"]').click();
 await page.pause();

});

test.only('prompt ok',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog",async(alert)=>{
    const message= alert.message();
    expect((message)).toEqual('I am a JS prompt');
    await alert.accept('dilaa');
    await expect(page.locator('[id="result"]')).toHaveText('You entered: dilaa');
 });
 await page.locator('[onclick="jsPrompt()"]').click();
 await page.pause();

});

test('frames',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    let framescount = page.frames().length;
    console.log('the frames count is ${framescount}');
    let bottomframe = page.frameLocator('[src="/frame_bottom"]').locator('//body[contains(text(),"BOTTOM")]');
    await expect (bottomframe).toHaveText('BOTTOM');
    await page.pause();

    let topframe = page.frame("frame-top");
    let topframechilds = topframe?.childFrames();
    let middleframe =topframechilds[1];
    await expect(middleframe.locator('[id="content"]')).toHaveText('MIDDLE');
    await page.pause();

});

test('windows',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/windows');
    const [browsertabs] = await Promise.all([
    page.waitForEvent('popup'),await page.locator('[href="/windows/new"]').click()
    ]);

   await browsertabs.waitForLoadState();
   const pages= browsertabs.context().pages();
   const defaulttab = pages[0];
   await expect(defaulttab.locator('//h3')).toContainText('Opening a new window');
   const secondtab = pages[pages.length-1];
   await expect(secondtab.locator('//h3')).toContainText('New Window');
   defaulttab.close();
   secondtab.close();
});


test('draganddrop',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
   
    const boxA = page.locator('[id="column-a"]');
    const boxB = page.locator('[id="column-b"]');

    await boxA.hover();
    await page.mouse.down();
    await boxB.hover();
    await page.mouse.up();

    await page.waitForTimeout(2000);

    await boxB.dragTo(boxA);
    await page.waitForTimeout(2000);
   // await boxA.dragTo(boxB);
   page.close();
});


test('download',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download');
    
    const download = await Promise.all(
   [
      page.waitForEvent('download') , await page.locator('[href="download/sylo-receipt.txt"]').click()

   ]
)

const downloadedFile = download[0];
const downloadedFilepath = await downloadedFile.path();
const downloadedFileName = downloadedFile.suggestedFilename();
await downloadedFile.saveAs("tamem");
console.log('the downloaded file path is ${downloadedFilepath}');

page.close();

});

test('upload',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/upload');
    
  const fileupload = await Promise.all([

    page.waitForEvent('filechooser'),await page.locator('[id="file-upload"]').click()

  ])
await fileupload[0].setFiles('./tamem');
await page.locator('[id="file-submit"]').click();
await page.waitForTimeout(2000);

await page.close();

});




