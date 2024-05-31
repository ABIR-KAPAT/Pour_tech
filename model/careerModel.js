const mongoose=require('mongoose')
const Schema=mongoose.Schema


const careerSchema= new Schema({
    
    job_image:{
        type:String,
        required:true
    },
    jobRole:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required: true
    },
    job_type:{
        type:String,  // full time or part time
        required:true
    }
},{timestamps:true})

const CareerModel = new mongoose.model("careers",careerSchema)
module.exports=CareerModel;