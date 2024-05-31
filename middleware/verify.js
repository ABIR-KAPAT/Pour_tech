const userModel = require('../model/adminModel')
const mongoose = require('mongoose');

exports.verifyUser = (req, res, next) => {
    userModel.findOne({
        email: req.body.email
    }).then((err, user) => {
        
        if (err) {
            req.flash('massage',"Can't Find Email Address")
            console.log('Can Find Email Address');
            res.redirect('/admin')
            return;
        }
        if (user) {
            req.flash('massage',"Email already Exists")
            console.log("Email already Exists");
            res.redirect('/admin/register')
            return;
        }
        // const password = req.body.password;
        // const confiromPW = req.body.confirmpassword;
        // if (password !== confiromPW) {
        //     console.log("password and confirm password doesn't match");
        //     req.flash('massage',"password and confirm password doesn't match")
        //     res.redirect('/admin/register')
        //     return;
        // }
        next();
    }).catch((err)=>{
        console.log(err);
    })
}