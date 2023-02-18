const easyinvoice = require('easyinvoice');

const fs = require('fs');
const path = require('path')
const file = path.join(__dirname , '../invoice.pdf')

//Import the library into your project


module.exports.create = async function (req , res) {
    
    var data = {
        // Customize enables you to provide your own templates
        // Please review the documentation for instructions and examples
        "customize": {
            //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
        },
        "images": {
            // The logo on top of your invoice
            "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
            // The invoice background
            "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
        },
        // Your own data
        "sender": {
            "company": "Sample Corp",
            "address": "Sample Street 123",
            "zip": "1234 AB",
            "city": "Sampletown",
            "country": "Samplecountry"
            //"custom1": "custom value 1",
            //"custom2": "custom value 2",
            //"custom3": "custom value 3"
        },
        // Your recipient
        "client": {
            "company": "Client Corp",
            "address": "Clientstreet 456",
            "zip": "4567 CD",
            "city": "Clientcity",
            "country": "Clientcountry"
            // "custom1": "custom value 1",
            // "custom2": "custom value 2",
            // "custom3": "custom value 3"
        },
        "information": {
            // Invoice number
            "number": "2021.0001",
            // Invoice data
            "date": "12-12-2021",
            // Invoice due date
            "due-date": "31-12-2021"
        },
        // The products you would like to see on your invoice
        // Total values are being calculated automatically
        "products": [
            {
                "quantity": 2,
                "description": "Product 1",
                "tax-rate": 6,
                "price": 33.87
            },
            {
                "quantity": 4.1,
                "description": "Product 2",
                "tax-rate": 6,
                "price": 12.34
            },
            {
                "quantity": 4.5678,
                "description": "Product 3",
                "tax-rate": 21,
                "price": 6324.453456
            }
        ],
        // The message you would like to display on the bottom of your invoice
        "bottom-notice": "Kindly pay your invoice within 15 days.",
        // Settings to customize your invoice
        "settings": {
            "currency": "USD", 
        },
        // Translate your invoice to your preferred language
        "translate": {
 
        },
    };
    
    // let result = easyinvoice.createInvoice(data , function (){
    //  fs.writeFileSync(`invoice.pdf`, result.pdf, 'base64');
        // easyinvoice.download('invoice.pdf' , result.pdf)
    // });
   
    return res.download('./invoice.pdf');
   
   
  }  