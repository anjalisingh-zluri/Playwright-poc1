import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';



// Step 1: Load environment variables from the .env file
dotenv.config();  // This will load variables from the .env file



//-------------------POD3-----------------------------------------------------------------------------------------------------------------------------------

var tokenn= "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImpHZHZqWE1VMkIxZ0h3RS15VmN1MyJ9.eyJodHRwczovL2FwaS56bHVyaS5jb20vb3JnU2x1ZyI6InpsdXJpLTQwIiwiaHR0cHM6Ly9hcGkuemx1cmkuY29tL2Nvbm5lY3Rpb25OYW1lIjoiVXNlcm5hbWUtUGFzc3dvcmQtQXV0aGVudGljYXRpb24iLCJodHRwczovL2FwaS56bHVyaS5jb20vY29ubmVjdGlvbklkIjoiY29uX0dmSmVhSEY5M0pGZkZENWMiLCJpc3MiOiJodHRwczovL2F1dGguemx1cmkuY29tLyIsInN1YiI6ImF1dGgwfDYxMzczMWVkN2Y5YTk1MDA3MWRjYjAwMSIsImF1ZCI6WyJodHRwczovL2FwaS56bHVyaS5jb20iLCJodHRwczovL3psdXJpLXByb2QudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcyNzI2NTk4MywiZXhwIjoxNzI3MjczMTgzLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG9mZmxpbmVfYWNjZXNzIiwiYXpwIjoiQTRlQlZPZ3N0TlpOSUpBeWNIYXp6c2t0U0tmcXJSc2QifQ.Ri_y_r18pNNaxKYhVGFgZQOklUiery76rzz--nJhp7JEkGsEsnyH9GS7u6zREqiaXWrJWrLJAFHdzkjW2Tr9Uhmpy70h9qpoBkFaftEKej1uH6wD_h5SZeOZ3fvZASHUnz7YCel6QZVK_3LWpLgL9OU1QjMW-ORcA5iBrACk3sBDDaf5ZNKU5tj6Not5S8_eXpMrWAhh6d0Kia57myGrxw-7BS5jDtaHHVfXr7FcWqpN_SrQIX8TKol8qZnixC_7Im4iQcC95lWnfVIPHXrSVJ2nsUmpUCdciNqdYVlrYljYuAzSiCFciXw96Qf4hxSDBQi8rves99YT4q6_F9fiDg"


let currentDate1=new Date();
let today_Date= currentDate1.toISOString().split('T')[0];

//QUERY TO SET PARAMETRIZED DATES
// Get the current date
let currentDate = new Date();

// Increment the date by one day
currentDate.setDate(currentDate.getDate() + 1);

// Format the new date as needed (e.g., YYYY-MM-DD)
let formattedDate = currentDate.toISOString().split('T')[0];


//QUERY TO FORMATE END DATE

// Decrease the day by 1
currentDate.setDate(currentDate.getDate() - 1);
// Increment the year by one
currentDate.setFullYear(currentDate.getFullYear() + 1);

// Format the new date as needed (e.g., YYYY-MM-DD)
let formattedendDate = currentDate.toISOString().split('T')[0];


//QUERY FOR THE RENEW DATE 
// Increment the date by one day
currentDate.setFullYear(currentDate.getFullYear() + 1);

// Format the new date as needed (e.g., YYYY-MM-DD)
let format_RENEWAL_Date = currentDate.toISOString().split('T')[0];


test('REQUEST-ADD CONTRACT',async({request})=>{

    const token = process.env.BEARER_TOKEN;

  // Ensure the token is available
  if (!token) {
    throw new Error('Bearer token is not set in environment variables');
  }
    const postAPIresponse = await request.post('https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts',{
        data:{
            "name": "V-ID Contract - "+today_Date,
            "vendor_id": "65571ee4919c215348abea6d",
            "renewed_contract_id": null,
            "owners": {
                "owner_id": "655ed1a924876c1099652b31",
                "financial_owner_id": "655ed1a924876c1099652b31",
                "negotiation_owner_id": "655ed1a924876c1099652b31",
                "it_owner_id": "655ed1a924876c1099652b31"
            },
            "status": "active",
            "is_app": true,
            "org_app_id": "64f74da3380d4d43af69c093",
            "type": "contract",
            "description": "cxz",
            "start_date": "2024-09-23",
            "end_date": `"`+formattedendDate+`"`,
            "cost_amortization": "months",
            "license_group_precedence": "start_date",
            "contract": {
                "agreement_type": "others",
                "cancel_by": null,
                "renew_by": `"`+format_RENEWAL_Date+`"`,
                "auto_renews": false,
                "payment": {
                    "type": "one_time",
                    "recurring": {
                        "frequency": null,
                        "period": null,
                        "repeats_on": null,
                        "repeats_on_day": null
                    },
                    "one_time": {
                        "payment_date":`"`+today_Date+`"`
                    }
                },
                "true_ups": {
                    "enabled": false,
                    "frequency": 1,
                    "period": "months",
                    "repeats_on": null
                }
            },
            "subscription": {
                "next_renewal": null,
                "renewal": {
                    "frequency": null,
                    "period": null
                }
            },
            "perpetual": {
                "payment": {
                    "type": null,
                    "date": null
                }
            },
            "licenses": [],
            "has_base_price": false,
            "base_price": {
                "currency": "EUR",
                "amount": null,
                "complete_term": true,
                "frequency": null,
                "period": null
            },
            "checklist": [
                {
                    "key": "Signed by both parties",
                    "value": false,
                    "is_custom": false
                },
                {
                    "key": "Approved by Finance",
                    "value": false,
                    "is_custom": false
                },
                {
                    "key": "Approved by IT",
                    "value": false,
                    "is_custom": false
                },
                {
                    "key": "Compliance Verification",
                    "value": false,
                    "is_custom": false
                }
            ],
            "documents": [],
            "custom_fields": [
                {
                    "field_id": "668e3f8a030ce3aa807c9b55",
                    "field_value": "Yes"
                },
                {
                    "field_id": "65312cf336288f2069fc0a44",
                    "field_value": "test"
                }
            ],
            "payment_method_id": "61efd318b988e3fa898df1be",
            "discount": {
                "type": "percentage",
                "value": null
            },
            "one_time_fee": [],
            "bulk_upload_id": null 
        },
            
                headers: {
                  'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
                },

    
 });

    
    const postApiresponse_body= await postAPIresponse.text();
    
    
    expect(postAPIresponse.status()).toBe(200);
    var jsonbody1=await postAPIresponse.json()
    console.log(jsonbody1)
    var contract_id = jsonbody1.id;
    console.log("cont_id",contract_id);
    
const response2 = await request.get(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${contract_id}`, {
    
    headers: {
      'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
    },
  });

  
 const text= await response2.text();
 expect(text).toContain('contract')
 expect(response2.status()).toBe(200);
 console.log(await response2.json())


 const response3 = await request.put(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${contract_id}`, {
    data:{
        
            "name": "Viber Contract - "+today_Date,
            "vendor_id": "668ceb0534057f336079a2b3",
            "renewed_contract_id": null,
            "primary_owner_id": "668ce99b34057f3360786c18",
            "financial_owner_id": "668ce99b34057f3360786d7b",
            "negotiation_owner_id": "65f37f638e591a66337e857f",
            "it_owner_id": "668ce99b34057f3360786e5c",
            "status": "active",
            "is_app": true,
            "org_app_id": "668ce98e34057f33607867cc",
            "type": "contract",
            "description": "desc",
            "start_date": "2024-09-23",
            "end_date": `"`+formattedendDate+`"`,
            "cancel_by": null,
            "renew_by": `"`+format_RENEWAL_Date+`"`,
            "agreement_type": "others",
            "contract_auto_renews": false,
            "payment_term": "one_time",
            "payment_repeat_frequency": null,
            "payment_repeat_interval": null,
            "payment_repeat_on": null,
            "payment_date": `"`+today_Date+`"`,
            "next_renewal_date": null,
            "renewal_repeat_frequency": null,
            "renewal_repeat_interval": null,
            "licenses": [],
            "has_base_price": false,
            "base_price": null,
            "base_currency": "USD",
            "base_frequency": null,
            "base_period": null,
            "checklist": [
                {
                    "key": "Signed by both parties",
                    "value": false,
                    "is_custom": false,
                    "_id": "66c858af241c07f0be64dbee"
                },
                {
                    "key": "Approved by Finance",
                    "value": false,
                    "is_custom": false,
                    "_id": "66c858af241c07f0be64dbef"
                },
                {
                    "key": "Approved by IT",
                    "value": false,
                    "is_custom": false,
                    "_id": "66c858af241c07f0be64dbf0"
                },
                {
                    "key": "Compliance Verification",
                    "value": false,
                    "is_custom": false,
                    "_id": "66c858af241c07f0be64dbf1"
                }
            ],
            "documents": [],
            "custom_fields": [
                {
                    "_id": "66c858af6d3d741cad28eec6",
                    "field_id": "668fafee8eedd2f9ba0265a5",
                    "field_value": "668ce99b34057f33607869bb",
                    "custom_field_name": "Mary Robertson",
                    "custom_field_id": "668ce99b34057f33607869bb",
                    "custom_field_image": null,
                    "org_custom_field_name": "test",
                    "org_custom_field_type": "reference",
                    "org_custom_field_options": [
                        ""
                    ],
                    "field_reference": "orgusers",
                    "entity_id": "66c858af241c07f0be64dbed"
                }
            ],
            "payment_method_id": "668cea6934057f33607913ee",
            "discount_type": "percentage",
            "discount_value": 0,
            "one_time_fee": [],
            "cost_amortization": "months",
            "license_group_precedence": "start_date",
            "true_ups_enabled": false,
            "true_ups_repeat_frequency": 1,
            "true_ups_repeat_interval": "months",
            "true_ups_repeat_on": null
        
        },
    headers: {
      'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
    },
  });

  expect(response3.status()).toBe(200);
            // var incrementedDate = new Date(today_Date);
            // incrementedDate.setDate(today_Date.getDate() + 3);
            // var incrementedDateStr = incrementedDate.toISOString();

            var today_Date1 = "2024-09-23";

// Convert the string to a Date object
var incrementedDate = new Date(today_Date1);

// Increment the date by 3 days
incrementedDate.setDate(incrementedDate.getDate() + 3);

// Convert the new date back to ISO string format
var incrementedDateStr = incrementedDate.toISOString(); 

  const response4= await request.post(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${contract_id}/terminate`, {
    data : {
        "contractId":contract_id,"terminationDate":incrementedDateStr
    },
    
    headers: {
      'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
    },
  });
  expect(response4.status()).toBe(200);
    
 });
 


//-----------------------------------------------------------------------------SUBSCRIPTION----------------------------------------------------------------------------

test('Test for Subscription', async ({ request }) => {

   // Step 1: Access the bearer token from the environment variable
    const token = process.env.BEARER_TOKEN;
  // Ensure the token is available
    if (!token) {
        throw new Error('Bearer token is not set in environment variables');
  }


     const response5 = await request.post('https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts',{
    data : { 
            "name": "Asana for G Suite Subscription -   Renews every 1 year",
    "vendor_id": "65571ee4919c215348abea6d",
    "renewed_contract_id": null,
    "owners": {
        "owner_id": "655ed1a924876c1099652b31",
        "financial_owner_id": "655ed1a924876c1099652b31",
        "negotiation_owner_id": "655ed1a924876c1099652b31",
        "it_owner_id": "655ed1a924876c1099652b31"
    },
    "status": "active",
    "is_app": true,
    "org_app_id": "66d9a235fefc83e6fb42ead6",
    "type": "subscription",
    "description": "desc",
    "start_date":formattedDate,
    "end_date": null,
    "cost_amortization": "months",
    "license_group_precedence": "start_date",
    "contract": {
        "agreement_type": null,
        "cancel_by": null,
        "renew_by": null,
        "auto_renews": false,
        "payment": {
            "type": null,
            "recurring": {
                "frequency": null,
                "period": null,
                "repeats_on": null,
                "repeats_on_day": null
            },
            "one_time": {
                "payment_date": null
            }
        },
        "true_ups": {
            "enabled": false,
            "frequency": 1,
            "period": "months",
            "repeats_on": null
        }
    },
    "subscription": {
        "next_renewal": `"`+format_RENEWAL_Date+`"`,
        "renewal": {
            "frequency": 1,
            "period": "years"
        },
        "auto_renews": true
    },
    "perpetual": {
        "payment": {
            "type": null,
            "date": null
        }
    },
    "licenses": [],
    "has_base_price": false,
    "base_price": {
        "currency": "EUR",
        "amount": null,
        "complete_term": true,
        "frequency": null,
        "period": null
    },
    "checklist": [
        {
            "key": "Signed by both parties",
            "value": false,
            "is_custom": false
        },
        {
            "key": "Approved by Finance",
            "value": false,
            "is_custom": false
        },
        {
            "key": "Approved by IT",
            "value": false,
            "is_custom": false
        },
        {
            "key": "Compliance Verification",
            "value": false,
            "is_custom": false
        }
    ],
    "documents": [],
    "custom_fields": [
        {
            "field_id": "668e3f8a030ce3aa807c9b55",
            "field_value": "Yes"
        },
        {
            "field_id": "66cdb7b6f7ed20b1a39e1170",
            "field_value": "test"
        },
        {
            "field_id": "65312cf336288f2069fc0a44",
            "field_value": "test"
        }
    ],
    "payment_method_id": "61efd318b988e3fa898df1be",
    "discount": {
        "type": "percentage",
        "value": null
    },
    "one_time_fee": []
    },
    headers: {
      'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
    },

 });

     
 const postresponse5= await response5.text();
    
    
 expect(response5.status()).toBe(200);
 var jsonbody5=await response5.json()
 console.log(jsonbody5)
 var subscription_id = jsonbody5.id;
 console.log("subs_id", subscription_id);
 
const response6 = await request.get(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${subscription_id}`, {
 
 headers: {
   'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
 },
});


const text= await response6.text();
expect(text).toContain('contract')
expect(response6.status()).toBe(200);
console.log(await response6.json())


const response7 = await request.put(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${subscription_id}`, {
    data:{
        
            "name": "Viber Contract - "+today_Date,
            "vendor_id": "668ceb0534057f336079a2b3",
            "renewed_contract_id": null,
            "primary_owner_id": "668ce99b34057f3360786c18",
            "financial_owner_id": "668ce99b34057f3360786d7b",
            "negotiation_owner_id": "65f37f638e591a66337e857f",
            "it_owner_id": "668ce99b34057f3360786e5c",
            "status": "active",
            "is_app": true,
            "org_app_id": "668ce98e34057f33607867cc",
            "type": "contract",
            "description": "desc",
            "start_date": "2024-09-23",
            "end_date": `"`+formattedendDate+`"`,
            "cancel_by": null,
            "renew_by": `"`+format_RENEWAL_Date+`"`,
            "agreement_type": "others",
            "contract_auto_renews": false,
            "payment_term": "one_time",
            "payment_repeat_frequency": null,
            "payment_repeat_interval": null,
            "payment_repeat_on": null,
            "payment_date": `"`+today_Date+`"`,
            "next_renewal_date": null,
            "renewal_repeat_frequency": null,
            "renewal_repeat_interval": null,
            "licenses": [],
            "has_base_price": false,
            "base_price": null,
            "base_currency": "USD",
            "base_frequency": null,
            "base_period": null,
            "checklist": [
                {
                    "key": "Signed by both parties",
                    "value": false,
                    "is_custom": false,
                    "_id": "66c858af241c07f0be64dbee"
                },
                {
                    "key": "Approved by Finance",
                    "value": false,
                    "is_custom": false,
                    "_id": "66c858af241c07f0be64dbef"
                },
                {
                    "key": "Approved by IT",
                    "value": false,
                    "is_custom": false,
                    "_id": "66c858af241c07f0be64dbf0"
                },
                {
                    "key": "Compliance Verification",
                    "value": false,
                    "is_custom": false,
                    "_id": "66c858af241c07f0be64dbf1"
                }
            ],
            "documents": [],
            "custom_fields": [
                {
                    "_id": "66c858af6d3d741cad28eec6",
                    "field_id": "668fafee8eedd2f9ba0265a5",
                    "field_value": "668ce99b34057f33607869bb",
                    "custom_field_name": "Mary Robertson",
                    "custom_field_id": "668ce99b34057f33607869bb",
                    "custom_field_image": null,
                    "org_custom_field_name": "test",
                    "org_custom_field_type": "reference",
                    "org_custom_field_options": [
                        ""
                    ],
                    "field_reference": "orgusers",
                    "entity_id": "66c858af241c07f0be64dbed"
                }
            ],
            "payment_method_id": "668cea6934057f33607913ee",
            "discount_type": "percentage",
            "discount_value": 0,
            "one_time_fee": [],
            "cost_amortization": "months",
            "license_group_precedence": "start_date",
            "true_ups_enabled": false,
            "true_ups_repeat_frequency": 1,
            "true_ups_repeat_interval": "months",
            "true_ups_repeat_on": null
        
        },
    headers: {
      'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
    },
  });

  expect(response7.status()).toBe(200);
            // var incrementedDate = new Date(today_Date);
            // incrementedDate.setDate(today_Date.getDate() + 3);
            // var incrementedDateStr = incrementedDate.toISOString();

            var today_Date3 = "2024-09-23";

// Convert the string to a Date object
var incrementedDateE = new Date(today_Date3);

// Increment the date by 3 days
incrementedDateE.setDate(incrementedDateE.getDate() + 3);

// Convert the new date back to ISO string format
var incrementedDateStr1 = incrementedDateE.toISOString(); 

  const response8= await request.post(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${subscription_id}/terminate`, {
    data : {
        "contractId":subscription_id,"terminationDate":incrementedDateStr1
    },
    
    headers: {
      'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
    },
  });
  expect(response8.status()).toBe(200);
    

 });



//------------------------------------------------------------------Perpetuals---------------------------------------------------------------------------------------------


 

test('Test for Perpetuals', async ({ request }) => {

    // Step 1: Access the bearer token from the environment variable
     const token = process.env.BEARER_TOKEN;
   // Ensure the token is available
     if (!token) {
         throw new Error('Bearer token is not set in environment variables');
   }
 
 
      const response9 = await request.post('https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts',{
     data : { 
        "name": "Asana Perpetual - 28 Sep 2024",
        "vendor_id": "65571ee4919c215348abea6d",
        "renewed_contract_id": null,
        "owners": {
            "owner_id": "64e4a1ae564b08af58f3db88",
            "financial_owner_id": "64e4a1ae564b08af58f3db88",
            "negotiation_owner_id": "64e4a1ae564b08af58f3db88",
            "it_owner_id": "655ed1a924876c1099652b31"
        },
        "status": "active",
        "is_app": true,
        "org_app_id": "64ec84a80757f05d7cfc0743",
        "type": "perpetual",
        "description": "desc",
        "start_date":today_Date,
        "end_date": null,
        "cost_amortization": "start_date",
        "license_group_precedence": "start_date",
        "contract": {
            "agreement_type": null,
            "cancel_by": null,
            "renew_by": null,
            "auto_renews": false,
            "payment": {
                "type": null,
                "recurring": {
                    "frequency": null,
                    "period": null,
                    "repeats_on": null,
                    "repeats_on_day": null
                },
                "one_time": {
                    "payment_date": null
                }
            },
            "true_ups": {
                "enabled": false,
                "frequency": 1,
                "period": "months",
                "repeats_on": null
            }
        },
        "subscription": {
            "next_renewal": null,
            "renewal": {
                "frequency": null,
                "period": null
            }
        },
        "perpetual": {
            "payment": {
                "type": "one_time",
                "date": formattedDate
            }
        },
        "licenses": [],
        "has_base_price": false,
        "base_price": {
            "currency": "EUR",
            "amount": null,
            "complete_term": true,
            "frequency": null,
            "period": null
        },
        "checklist": [
            {
                "key": "Signed by both parties",
                "value": false,
                "is_custom": false
            },
            {
                "key": "Approved by Finance",
                "value": false,
                "is_custom": false
            },
            {
                "key": "Approved by IT",
                "value": false,
                "is_custom": false
            },
            {
                "key": "Compliance Verification",
                "value": false,
                "is_custom": false
            }
        ],
        "documents": [],
        "custom_fields": [
            {
                "field_id": "668e3f8a030ce3aa807c9b55",
                "field_value": "Yes"
            },
            {
                "field_id": "66cdb7b6f7ed20b1a39e1170",
                "field_value": "tessstting"
            },
            {
                "field_id": "65312cf336288f2069fc0a44",
                "field_value": "test"
            }
        ],
        "payment_method_id": "61efd318b988e3fa898df1be",
        "discount": {
            "type": "percentage",
            "value": null
        },
        "one_time_fee": []
     },
     headers: {
       'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
     },
 
  });
 
      
  const postresponse9= await response9.text();
     
     
  expect(response9.status()).toBe(200);
  var jsonbody9=await response9.json()
  console.log(jsonbody9)
  var perpetual_id = jsonbody9.id;
  console.log("perpetual_id", perpetual_id);
  
 const response10 = await request.get(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${perpetual_id}`, {
  
  headers: {
    'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
  },
 });
 
 
 const text= await response10.text();
 expect(text).toContain('contract')
 expect(response10.status()).toBe(200);
 console.log(await response10.json())
 
 
 const response11 = await request.put(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${perpetual_id}`, {
     data:{
        "name": "Zluri Perpetual - 28 Sep 2024",
        "vendor_id": "61efcae8e35aff26ae5285f3",
        "renewed_contract_id": null,
        "primary_owner_id": "65e9656c5fb67a997f3aa74d",
        "financial_owner_id": "657060cd368570f0873568dd",
        "negotiation_owner_id": "664d994df0988eca02f2babf",
        "it_owner_id": "6629d959c19432c53eb0c3c1",
        "status": "active",
        "is_app": true,
        "org_app_id": "62c2f6649dd820b42797a1b5",
        "type": "perpetual",
        "description": "descriptionnsssssss",
        "start_date": formattedDate,
        "end_date":  `"`+formattedendDate+`"`,
        "cancel_by": null,
        "renew_by": null,
        "agreement_type": null,
        "contract_auto_renews": false,
        "payment_term": "one_time",
        "payment_repeat_frequency": null,
        "payment_repeat_interval": null,
        "payment_repeat_on": null,
        "payment_date": formattedDate,
        "next_renewal_date": null,
        "renewal_repeat_frequency": null,
        "renewal_repeat_interval": null,
        "licenses": [],
        "has_base_price": false,
        "base_price": null,
        "base_currency": "EUR",
        "base_frequency": null,
        "base_period": null,
        "checklist": [
            {
                "key": "Signed by both parties",
                "value": false,
                "is_custom": false,
                "_id": "66b49c8ce30963e86f839abd"
            },
            {
                "key": "Approved by Finance",
                "value": false,
                "is_custom": false,
                "_id": "66b49c8ce30963e86f839abe"
            },
            {
                "key": "Approved by IT",
                "value": false,
                "is_custom": false,
                "_id": "66b49c8ce30963e86f839abf"
            },
            {
                "key": "Compliance Verification",
                "value": false,
                "is_custom": false,
                "_id": "66b49c8ce30963e86f839ac0"
            }
        ],
        "documents": [],
        "custom_fields": [
            {
                "_id": "66b49c8cabfc02794606f857",
                "field_id": "65312cf336288f2069fc0a44",
                "field_value": "testtt",
                "custom_field_value": "testtt",
                "org_custom_field_name": "test",
                "org_custom_field_options": [
                    ""
                ],
                "org_custom_field_type": "text",
                "field_reference": null,
                "entity_id": "66b49c8ce30963e86f839abc"
            },
            {
                "field_id": "668e3f8a030ce3aa807c9b55",
                "field_value": "Yes"
            }
        ],
        "payment_method_id": "61efd318b988e3fa898df1be",
        "discount_type": "percentage",
        "discount_value": 0,
        "one_time_fee": [],
        "cost_amortization": "start_date",
        "license_group_precedence": "start_date",
        "true_ups_enabled": false,
        "true_ups_repeat_on": null
    },
     headers: {
       'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
     },
   });
 
   expect(response11.status()).toBe(200);
             // var incrementedDate = new Date(today_Date);
             // incrementedDate.setDate(today_Date.getDate() + 3);
             // var incrementedDateStr = incrementedDate.toISOString();
 
             var today_Date4 = "2024-09-23";
 
 // Convert the string to a Date object
 var incrementedDateEe = new Date(today_Date4);
 
 // Increment the date by 3 days
 incrementedDateEe.setDate(incrementedDateEe.getDate() + 3);
 
 // Convert the new date back to ISO string format
 var incrementedDateStr4 = incrementedDateEe.toISOString(); 
 
   const response12= await request.post(`https://api.zluri.com/organization/61efca55b988e3fa898deeae/contracts/${perpetual_id}/terminate`, {
     data : {
         "contractId":perpetual_id,"terminationDate":incrementedDateStr4
     },
     
     headers: {
       'Authorization': `Bearer ${tokenn}`,  // Inject Bearer token here
     },
   });
   expect(response12.status()).toBe(200);
     
 
  });


