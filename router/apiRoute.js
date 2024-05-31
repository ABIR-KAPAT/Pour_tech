const express=require('express')
const apiRoute=express.Router()
const apiController= require('../controller/apiController')
const imageSingle = require('../middleware/single')



apiRoute.get('/getBanner', apiController.getBannerApi)

apiRoute.get('/getPlans/:serviceId', apiController.getPlansApi)

apiRoute.get('/getService', apiController.getServiceApi)

apiRoute.get('/getCareer', apiController.getCareerApi)

apiRoute.get('/getContact', apiController.getContactApi)

apiRoute.get('/getAbout', apiController.getAboutApi)

apiRoute.get('/getBlogs', apiController.getBlogApi)

apiRoute.get('/single-service-details/:serviceId', apiController.getSingleServiceDetailsApi);

apiRoute.post('/postCV',imageSingle.single("cv"), apiController.getCvApi )



module.exports=apiRoute