const express = require('express');
//  below library for create Invoice Pdf
const easyinvoice = require('easyinvoice');

const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const saveData = require('./models/saveJson')
 const fs = require('fs');
 const path = require('path');
 const app = express();
const port = 8000;

// static pages
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
 // productList data 
 
 saveData.saveData();

// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// check port
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});


