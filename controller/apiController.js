const BannerModel = require('../model/bannerModel')
const AboutModel = require('../model/aboutModel')
const Response = require('../hepler/response')
const CareerModel= require('../model/careerModel')
const ServiceModel= require('../model/serviceModel')
const PlanModel= require('../model/plansModel')
const ContactModel= require('../model/contactModel')
const BlogModel = require('../model/blogsModel')
const SingleServiceModel = require('../model/singleServiceModel')
const GetCVModel = require('../model/getCVModel')




const getBannerApi=async(req,res)=>{
    try{
        const bannerData =await BannerModel.find()
        res.status(Response.errorCode.success).json({
            massage:'Success',
            success:true,
            data:bannerData
        })
    }catch(err){
        res.status(Response.errorCode.serverError).json({
            massage:"Error",
            success:false
        })
    }
}


const getAboutApi=async(req,res)=>{
    try{
        const aboutData= await AboutModel.find()
        res.status(Response.errorCode.success).json({
            massage:'success',
            success:true,
            data:aboutData
        })
    }catch{
        res.status(Response.errorCode.serverError).json({
            massage:'Server Error',
            success:false
        })
    }
}


const getCareerApi=async(req,res)=>{
    try{
        const careerData= await CareerModel.find()
        res.status(Response.errorCode.success).json({
            massage:'Get Data Successfully!',
            success:true,
            data:careerData
        })

    }catch{
        res.status(Response.errorCode.serverError).json({
            massage:'Server Error In Getting Data',
            success:true
        })

    }
}


const getServiceApi=async(req,res)=>{
    try{
        const serviceData= await ServiceModel.find()
        res.status(Response.errorCode.success).json({
            massage:'Get Data Successfully!',
            success:true,
            data:serviceData
        })

    }catch{
        res.status(Response.errorCode.serverError).json({
            massage:'Server Error In Getting Data',
            success:true
        })

    }
}

const getSingleServiceDetailsApi = async (req, res) => {
    const {serviceId}= req.params
    try{
        SingleServiceModel.find({serviceId}).populate('serviceId').then(result=>{
            res.status(Response.errorCode.success).json({
                massage:'Get Data Successfully!',
                success:true,
                data:result
            })
        })
    }catch{
        res.status(Response.errorCode.serverError).json({
            massage:'Server Error In Getting Data',
            success:true
        })

    }
  };


const getPlansApi=async(req,res)=>{
    const {serviceId}= req.params
    try{
        PlanModel.find({serviceId}).populate('serviceId').then(result=>{
            res.status(Response.errorCode.success).json({
                massage:'Get Data Successfully!',
                success:true,
                data:result
            })
        })
    }catch{
        res.status(Response.errorCode.serverError).json({
            massage:'Server Error In Getting Data',
            success:true
        })

    }
}



const getContactApi=async(req,res)=>{
    try{
        const contactData= await ContactModel.find()
        res.status(Response.errorCode.success).json({
            massage:'Get Data Successfully!',
            success:true,
            data:contactData
        })

    }catch{
        res.status(Response.errorCode.serverError).json({
            massage:'Server Error In Getting Data',
            success:true
        })

    }
}
const getBlogApi=async(req,res)=>{
    try{
        const blogData= await BlogModel.find()
        res.status(Response.errorCode.success).json({
            massage:'Get Data Successfully!',
            success:true,
            data:blogData
        })

    }catch{
        res.status(Response.errorCode.serverError).json({
            massage:'Server Error In Getting Data',
            success:true
        })

    }
}



const getCvApi = (req, res) => {
    const cv = req.file;
    const newCareer = new GetCVModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        zip: req.body.zip,
        experience: req.body.experience,
        cv: cv.path, // Using cv.path to store the file path
    });

    newCareer.save()
        .then((result) => {
            if (result) {
                console.log(result, 'successfully added to the database');
                return res.status(201).json({ success: true, data: result });
            }
        })
        .catch((err) => {
            console.log(err, 'error');
            return res.status(500).json({ success: false, message: 'Server Error', error: err.message });
        });
};



module.exports={
    getBannerApi,
    getAboutApi,
    getCareerApi,
    getServiceApi,
    getPlansApi,
    getContactApi,
    getBlogApi,
    getSingleServiceDetailsApi,
    getCvApi
}