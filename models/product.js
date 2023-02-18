const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  
    DSIN :{
        type : String ,
        required : true ,

    },
    Name : {
        type : String ,
        required : true ,

    },
    MRP : {
        type: Number ,
        required: true ,

    },
    HSN : {
        type: Number ,
        required: true ,
    },
    GST: {
        type: Number ,
        required: true ,
    },
    Unit:{
        type: String ,
        required: true ,
    }
    

},{
    timestamps: true 
}
);

const Products = mongoose.model('Products', productsSchema);

module.exports = Products ;




