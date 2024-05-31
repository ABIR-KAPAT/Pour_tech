const BlogModel = require('../model/blogsModel')


exports.blog = (req,res)=>{
    BlogModel.find().then((data)=>{
        if(data){
            res.render('blogs',{
                blogs: data,
                adminData: req.admin
            })
        }
    })
}


exports.addBlog =(req,res)=>{
    const image = req.file
    
    const blogData = new BlogModel({
        blog_image: image.path,
        blog_title: req.body.blog_title,
        blog_subheading: req.body.blog_subheading,
        blog_content: req.body.blog_content,
        author: req.body.author,
    })
    blogData.save().then((result)=>{
        if(result){
            console.log(result, 'blog added');
            return  res.redirect('/admin/blogs')
        }
    }).catch((err)=>{
        console.log('Error', err);
    })
}


exports.blogdelete=((req,res)=>{
    const uid=req.params.id;
    BlogModel.deleteOne({_id:uid}).then(del=>{
        console.log(del,'deleted');
        res.redirect('/admin/blogs')
    }).catch(err=>{
        console.log(err);
    })
  })