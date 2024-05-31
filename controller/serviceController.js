const { title } = require('process')
const ServiceModel = require('../model/serviceModel')
const path = require('path')



exports.service= (req,res)=> {
    ServiceModel.find().then((data)=>{
        if(data){
            res.render('service', {
                service: data,
                adminData: req.admin
            })
        }
    })
}



exports.addService=(req,res)=>{
    const image = req.file;
    const  newService = new ServiceModel({
        service_icon: image.path,
        title: req.body.title,
        service_desc: req.body.service_desc,
    });
    
    newService.save()
      .then((result)=>{
        if(result){
            console.log(result, 'successfully added to the database');
            return res.redirect('/admin/service');
        }
      }).catch((err)=>{
        console.log(err, 'error');
      })
}




exports.serviceEdit =(req,res)=>{
  const editId = req.params.id
  ServiceModel.findById(editId)
  .then((serED)=>{
    console.log(serED);
    res.render('serviceEdit', {serED,
      title: "Service Edit Form"
    })
  }).catch((err)=>{
    console.log(err, 'error')
  })
}

exports.updateService = (req, res) => {
    const serviceId = req.body.serviceId;
    const title = req.body.title;
    const service_desc = req.body.service_desc;
    const image = req.file;
  
    ServiceModel.findById(serviceId)
      .then((service) => {
        service.title = title;
        service.service_desc = service_desc;
        if (image) {
          service.service_icon = image.path;
        }
        return service.save();
      })
      .then((updatedService) => {
        console.log(updatedService, 'successfully updated in the database');
        res.redirect('/admin/service');
      })
      .catch((err) => {
        console.log(err, 'error');
        res.status(500).send('Error updating service');
      });
  };
  


