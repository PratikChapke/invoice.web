
const mongoose =require('mongoose')

const Products =require("../models/product");

const items = require('./itemList.json')


module.exports.saveData = () => {

    // get refs to the models we defined above
    // clear all existing documents from the collections

    Products.find({}).remove();

   for(var i=0 ; i<items.length ; i++){
    new Products( items[i]).save();

    console.log('secceed savedata function')
     
   }
}
