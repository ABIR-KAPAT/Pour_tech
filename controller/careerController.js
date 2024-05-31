const CareerModel = require('../model/careerModel')


exports.career =(req,res) =>{
    CareerModel.find().then((data)=>{
        if(data){
            res.render('careers',{
                career:  data,
                adminData: req.admin
            })
        }
    })
}



exports.addCareer =(req,res)=>{
    const image = req.file;
    const careerData = new CareerModel({
        job_image : image.path,
        jobRole: req.body.jobRole,
        location: req.body.location,
        job_type: req.body.job_type
    })
    careerData.save().then((result)=>{
        if(result){
            console.log(result, 'successfully added to database');
            return res.redirect('/admin/careers')
        }
    }).catch((err)=>{
        console.log(err, "error in adding the data");
    })
}


exports.careerdelete=((req,res)=>{
    const uid=req.params.id;
    CareerModel.deleteOne({_id:uid}).then(del=>{
        console.log(del,'deleted');
        res.redirect('/admin/careers')
    }).catch(err=>{
        console.log(err);
    })
  })