import { test, expect  } from '@playwright/test';
test.describe.configure({ mode: 'serial' });

let objectId =null ;
const baseurl = 'https://api.restful-api.dev/';
let fullpathwithid: string;
const fullurlwithobjectpath = baseurl + 'objects';

test('get api' , async({request})=>{
 
 const startingtime = Date.now();
 const response = await request.get(fullurlwithobjectpath);
 let responsebody = await response.json();
 let responseheaders = response.headers();
 console.log(responsebody);
 expect(response.status()).toBe(200);
 expect(responsebody[0].id).toBe('1');
 console.log(responseheaders);
 expect(responseheaders['content-type']).toContain('application/json');
 let responsesize = (await response.body()).byteLength;
 expect(responsesize).toBeLessThan(4000);
console.log(responsesize);
let responsetime = Date.now()-startingtime;
console.log(responsetime);
expect(responsetime).toBeLessThan(2000);


})

test('post api' , async({request})=>{
    const payload={

  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}
  

const response = await request.post(fullurlwithobjectpath,{
   data:payload

})
let responsebody = await response.json();
console.log(responsebody);
expect(response.status()).toBe(200);
expect(responsebody.name).toContain(payload.name);
objectId = responsebody.id;
fullpathwithid = fullurlwithobjectpath+'/'+objectId;

})

test('put api' , async({request})=>{
    const payload={

  "name": "Apple MacBook Pro 11",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}
  
const response = await request.put(fullpathwithid,{
   data:payload

})
let responsebody = await response.json();
console.log(responsebody);
expect(response.status()).toBe(200);
expect(responsebody.name).toContain(payload.name);

})

test('patch api' , async({request})=>{
const payload={

  "name": "Apple MacBook Pro 16 (Updated Name)"

  }

const response = await request.patch(fullpathwithid ,{
 
    data:payload

})
let responsebody = await response.json();
console.log(responsebody);
expect(response.status()).toBe(200);
expect(responsebody.name).toContain(payload.name);

})

test('delete api' , async({request})=>{
const response = await request.delete(fullpathwithid)
let responsebody = await response.json();
console.log(responsebody);
expect(response.status()).toBe(200);
expect(responsebody.message).toContain('Object with');

});



