const express = require('express');
// imported in node module
const router = express.Router();

// controllers 
const Home = require('../controllers/products')

const invoice = require('../controllers/invoice')

router.get('/home' , Home.home);
   
 router.get('/home/invoice', Home.invoice)
 // post method code remaining
 router.post('/home/createinvoice', invoice.create )

module.exports = router;

