const AboutModel = require('../model/aboutModel')


exports.about=(req,res)=>{
    AboutModel.find().then((data)=>{
        if(data){
            res.render('about',{
                about: data,
                adminData: req.admin
            })
        }
    })
}


exports.addAbout= (req,res) => {
    const image = req.file;
    const newAbout = new AboutModel({
        about_image: image.path,
        title: req.body.title,
        about_desc: req.body.about_desc
    });

    newAbout.save().then((result)=>{
        if(result){
            console.log(result, 'data added');
            return res.redirect('/admin/about')
        }
    }).catch((err)=>{
        console.log(err, 'error');
    })
}



exports.aboutdelete=((req,res)=>{
    const uid=req.params.id;
    AboutModel.deleteOne({_id:uid}).then(del=>{
        console.log(del,'deleted');
        res.redirect('/admin/about')
    }).catch(err=>{
        console.log(err);
    })
})