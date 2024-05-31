const express=require('express')
const route=express.Router()
const multer= require('multer')
const adminController= require('../controller/adminController')
const bannerController= require('../controller/bannerController')
const serviceController= require('../controller/serviceController')
const aboutController= require('../controller/aboutController')
const planController= require('../controller/planController')
const contactController= require('../controller/contactController')
const careerController= require('../controller/careerController')
const blogController= require('../controller/blogController')
const singleserviceController= require('../controller/singleServiceController')
const getCvController= require('../controller/getCvController')

const verify=require('../middleware/verify')
const userAuth=require('../middleware/userAuth')
const adminAuth=require('../middleware/adminAuth')

// Image single
const imageSingle = require('../middleware/single')
// image mulipel
const imageMultiple = require('../middleware/serviceMulter')

// const adminController = require('../controller/adminController')

const  app = express();


const bodyParser = require('body-parser')





//multer for file upload

// const multer =require('multer')


route.use(express.urlencoded({ extended: true }))
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));



route.get('/register',adminController.adminReg)
route.post('/register-create',adminController.adminCreate)

route.get('/admin_login',  adminController.adminLog)
route.post('/login',adminController.Logincreate)
route.get('/adminlogout', adminController.logout)



route.get('/', adminController.adminDashboard)


// route.get('/banner', bannerController.banner)
// route.post('/addBanner', bannerController.addBanner)
// route.get('/bannerdelete/:id', bannerController.bannerdelete)



route.get('/service', [adminAuth.jwtAdminAuth],adminController.adminAuth, serviceController.service)
route.post( '/addService',imageSingle.single("image"), serviceController.addService)
route.get("/service-edit/:id", serviceController.serviceEdit)
route.post("/service-update",imageSingle.single("image"), serviceController.updateService)

route.get('/serviceDetails', [adminAuth.jwtAdminAuth],adminController.adminAuth, singleserviceController.singleservice)
route.post('/addService-details',imageMultiple.array("image",5),singleserviceController.addServiceDetails)
route.get('/serviceDetails-edit/:id', singleserviceController.serviceDetailsEdit)
route.post('/updateService-details',imageMultiple.array("image",5),singleserviceController.updateServiceDetails)


route.get('/about',[adminAuth.jwtAdminAuth],adminController.adminAuth, aboutController.about)
route.post('/addAbout',imageSingle.single("image"), aboutController.addAbout)
route.get('/aboutdelete/:id', aboutController.aboutdelete)


route.get('/plans',[adminAuth.jwtAdminAuth],adminController.adminAuth, planController.plans)
route.post('/addplan', planController.addPlans)
route.get('/plan-edit/:id', planController.plansEdit)
route.post('/plan-update', planController.updateplans)


route.get('/contact',[adminAuth.jwtAdminAuth],adminController.adminAuth, contactController.contact)
route.post('/addContact', contactController.addContact)
route.get('/contactdelete/:id', contactController.contactdelete)



route.get('/careers',[adminAuth.jwtAdminAuth],adminController.adminAuth, careerController.career)
route.post('/addCareer',imageSingle.single("image"), careerController.addCareer)
route.get('/careerdelete/:id', careerController.careerdelete)



route.get('/blogs',[adminAuth.jwtAdminAuth],adminController.adminAuth, blogController.blog)
route.post('/addBlogs',imageSingle.single("image"), blogController.addBlog)
route.get('/blogsdelete/:id', blogController.blogdelete)

route.get('/getCV',[adminAuth.jwtAdminAuth],adminController.adminAuth, getCvController.getcv)


module.exports=route