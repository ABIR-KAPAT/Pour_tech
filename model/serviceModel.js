const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ServiceSchema= new Schema({

    
    service_icon:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    service_desc:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,
    }
},{ timestamps: true });

//module.exports=mongoose.model('product',ProductSchema)
const ServiceModel = new mongoose.model('services',ServiceSchema)
 module.exports = ServiceModel