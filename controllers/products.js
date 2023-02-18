//  below library for create Invoice Pdf
const fs = require('fs');

const Products =require("../models/product"); 
 
// invoice module
module.exports.invoice = async function(req , res ){
  // const productId = req.params.id;
  const productId = '63efa75b930f6bd40a1e9a4d'
  let cardItems = await Products.findById(productId).limit(1);

  return res.render('invoice',{
    title : " Wholesale Products" ,
     Product : cardItems 
  })
}

// home module
module.exports.home = async  function(req, res){
  try{
  const items = await Products.find({}).limit(7);

    return res.render('home',{
        title : " Wholesale Products" ,
        Product_List : items 
    });
  }catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

