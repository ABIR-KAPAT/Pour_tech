const express=require('express')
const ejs=require('ejs')
const moongose=require('mongoose');
const bodyParser = require("body-parser")
const cors=require('cors')
const cookieparser=require('cookie-parser')
const path = require('path')
const connectFlash = require("connect-flash");
const multer=require('multer')
const session=require('express-session')





const  app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(
    session({
      secret: "abir0010",
      saveUninitialized: true,
      resave: false,
    })
  );

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}))
app.use(cookieparser())
app.use(connectFlash());
app.use(express.static('upload'))
app.use(express.static(path.join(__dirname,'public')))
app.use('/upload',express.static(path.join(__dirname, 'upload')))



//use multer for file upload





const router = require('./router/adminRoute')
app.use('/admin',router)

const apiRoute = require('./router/apiRoute')
app.use('/api',apiRoute)



const dbcon="mongodb+srv://pourtechnologies:E98PXkiaHGUacYkX@pourtech.yt3rdla.mongodb.net/web_data"
const port= process.env.PORT || 4545


moongose.connect(dbcon,{ useNewUrlParser: true ,useUnifiedTopology: true })
    .then(result=>{
        app.listen(port,()=>{
            console.log(`server is running on http://localhost:${port}/admin`);
            console.log(`database connected`);
        })
    }).catch(err=>{
        console.log(err);
    })