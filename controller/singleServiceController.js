const SingleServiceModel = require('../model/singleServiceModel')
const PlanModel = require('../model/plansModel')
const ServiceModel = require('../model/serviceModel')
const { options } = require('../router/adminRoute')



exports.singleservice = (req, res) => {
    SingleServiceModel.find()
    .populate([
        { path: 'service', options: { strictPopulate: false } },
        { path: 'plans', options: { strictPopulate: false } }

    ])
    .then(data1 => {
        ServiceModel.find().then(data2 => {
            PlanModel.find().then(data3 => {
                res.render('serviceDetails', {
                    title: 'service details',
                    singleservice: data1,
                    serviceData: data2,
                    planDetailsData: data3,
                    adminData: req.admin
                })
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
}

exports.addServiceDetails = (req, res) => {
    
    // const image= req.file;
    const serviceDetailsData = new SingleServiceModel({
        // tech_img: image.path,
        serviceId: req.body.serviceId,
        plansId: req.body.plansId,
        title: req.body.title,
        subtitle: req.body.subtitle,
        about: req.body.about,
        technology1: req.body.technology1,
        technology2: req.body.technology2,
        technology3: req.body.technology3,
        technology4: req.body.technology4,
        technology5: req.body.technology5,
        technology6: req.body.technology6,
        technology7: req.body.technology7,
        technology8: req.body.technology8,
    })
    if (req.files) {
        let path = ''
        req.files.forEach(function (files, index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        serviceDetailsData.image = path
    }
    serviceDetailsData.save().then((result) => {
        if (result) {
            console.log(result, 'details added');
            res.redirect('/admin/serviceDetails')
        }
    })
}


exports.serviceDetailsEdit =(req,res)=>{
    const editId = req.params.id
    SingleServiceModel.findById(editId)
    .then((serviceED)=>{
      console.log(serviceED);
      res.render('serviceDetailsEdit', {serviceED,
        title: "Service Edit Form"
      })
    }).catch((err)=>{
      console.log(err, 'error')
    })
  }


  exports.updateServiceDetails = (req, res) => {
    const singleserviceId = req.body.singleserviceId;
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const about = req.body.about;
    const technology1 = req.body.technology1;
    const technology2 = req.body.technology2;
    const technology3 = req.body.technology3;
    const technology4 = req.body.technology4;
    const technology5 = req.body.technology5;
    const technology6 = req.body.technology6;
    const technology7 = req.body.technology7;
    const technology8 = req.body.technology8;
  
    SingleServiceModel.findById(singleserviceId)
      .then((singleservice) => {
        if (!singleservice) {
          console.error('No service found with the given ID:', singleserviceId);
          return res.status(404).send('Service not found');
        }
  
        singleservice.title = title;
        singleservice.subtitle = subtitle;
        singleservice.about = about;
        singleservice.technology1 = technology1;
        singleservice.technology2 = technology2;
        singleservice.technology3 = technology3;
        singleservice.technology4 = technology4;
        singleservice.technology5 = technology5;
        singleservice.technology6 = technology6;
        singleservice.technology7 = technology7;
        singleservice.technology8 = technology8;
  
        if (req.files) {
          let path = '';
          req.files.forEach(function (files, index, arr) {
            path += files.path + ',';
          });
          path = path.substring(0, path.lastIndexOf(','));
          singleservice.image = path;
        }
  
        return singleservice.save();
      })
      .then((updatedService) => {
        console.log('Service successfully updated:', updatedService);
        return res.redirect('/admin/serviceDetails');
      })
      .catch((err) => {
        console.error('Error updating service:', err);
        return res.status(500).send('Error updating service');
      });
  };