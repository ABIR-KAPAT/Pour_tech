const ContactModel = require('../model/contactModel')


exports.contact = (req,res) => {
    ContactModel.find().then((data)=>{
        if(data){
            res.render('contact', {
                contact: data,
                adminData: req.admin
            })
        }
    })
}


exports.addContact = (req,res)=>{
    const contactData = new ContactModel({
        phoneNumber : req.body.phoneNumber, 
        email: req.body.email, 
        address: req.body.address,
        mapLink: req.body.mapLink
    })
    contactData.save().then((result)=>{
        if(result){
            console.log(result, 'added to database');
            res.redirect('/admin/contact')
        }
    }).catch((err)=>{
        console.log(err, 'error');
    })
}


exports.contactdelete=((req,res)=>{
    const uid=req.params.id;
    ContactModel.deleteOne({_id:uid}).then(del=>{
        console.log(del,'deleted');
        res.redirect('/admin/contact')
    }).catch(err=>{
        console.log(err);
    })
  })