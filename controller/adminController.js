const bcrypt = require('bcryptjs')
const AdminModel = require('../model/adminModel')
const jwt = require('jsonwebtoken')
const adminAuth = require('../middleware/adminAuth')





exports.adminLog = (req, res) => {
    res.render('signin', { title: "Admin login" })
}



//login
exports.Logincreate = ((req, res) => {

    AdminModel.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            //console.log(data);
            if (data.status == false) {
                const pwd = data.password;
                if (bcrypt.compareSync(req.body.password, pwd)) {
                    const token = jwt.sign({
                        id: data._id,
                        name: data.name,
                        email: data.email
                    }, "pourtech2023xyz", { expiresIn: "50m" });
                    // console.log(token);
                    // console.log(data.name);
                    res.cookie('adminToken', token)
                    res.cookie('email', data.email)
                    res.cookie('password', data.password)
                    res.redirect('/admin');
                } else {
                    req.flash('massage', "Password Not Match")

                    console.log("Password Not Match");
                    res.redirect('/admin/admin_login')
                }
            } else {
                req.flash('massage', "Email Not Exist")

                console.log('Email Not Exist');
                res.redirect('/admin/admin_login')
            }
        }
    }).catch((err) => {
        console.log(err);
    })
})






exports.adminReg = (req, res) => {
    res.render('signup', { title: "Admin Register" })
}

exports.adminCreate = (req, res) => {
    const admin = new AdminModel({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        status: false,
    })
    admin.save().then((data) => {
        if (data) {
            console.log('Admin Add Successfully');
            res.redirect('/admin/admin_login')
        }
    }).catch((err) => {
        console.log(err, 'Admin Not Added');
    })
}


exports.adminDashboard = (req, res) => {
    res.render('dashboard', {
        adminData: req.admin
    })
}




exports.adminAuth = (req, res, next) => {
    // console.log(req.admin);
    if (req.admin) {
        //    console.log(req.admin);
        next();
    } else {
        console.log('Err While Admin Auth');
        res.redirect('/admin/admin_login')
    }
}


// exports.addDestination = (req,res)=>{
//     const destinationData= new DestinationModel({
//         destination_name: req.body.destination_name,
//         destination_image: req.file.path
//     }) 
//     destinationData.save().then((data)=>{
//         if(data) {
//             console.log('destination added', data);
//         }
//     }).catch((err)=>{
//         console.error('Error in adding the data', err);
//     })
// }

exports.logout = (req, res) => {
    res.clearCookie("adminToken")
    res.redirect('/admin/admin_login')
}



exports.adminDashboard = (req, res) => {
    res.render('dashboard', {
        title: 'Home Page',
        adminData: req.admin
    })
}