const mongoose=require('mongoose')
const Schema=mongoose.Schema

const BannerSchema= new Schema({
    
    
    title:{
        type:String,
        required:true
    },
    banner_desc:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,
    }
},{ timestamps: true });

//module.exports=mongoose.model('product',ProductSchema)
const BannerModel = new mongoose.model('banner',BannerSchema)
 module.exports = BannerModel