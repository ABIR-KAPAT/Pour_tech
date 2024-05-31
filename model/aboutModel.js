const mongoose=require('mongoose')
const Schema=mongoose.Schema

const AboutSchema= new Schema({
    
    about_image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    about_desc:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,
    }
},{ timestamps: true });

//module.exports=mongoose.model('product',ProductSchema)
const AboutModel = new mongoose.model('about',AboutSchema)
 module.exports = AboutModel