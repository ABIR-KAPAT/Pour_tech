const GetCVModel = require('../model/getCVModel')


exports.getcv=(req,res)=>{
    GetCVModel.find().then((data)=>{
        if(data){
            res.render('getCV',{
                getcv: data,
                adminData: req.admin
            })
        }
    })
}