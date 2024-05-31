const mongoose=require('mongoose')
const Schema=mongoose.Schema;


const BlogSchema = new Schema({

    blog_title:{
        type:String,
        required:true
    },
    blog_subheading:{
        type:String,
        required:true
    },
    blog_content:{
        type:String,
        required:true
    },
    blog_image:{
        type: String,
        required:true
    },
    author:{
        type:String,
        required:true
    }

},{timestamps: true});


const BlogModel = new mongoose.model('blogs', BlogSchema)
module.exports = BlogModel