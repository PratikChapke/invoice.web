const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/InvoiceGenerator');

// mongoose.set('strictQuery', true);

const db = mongoose.connection;
 

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;