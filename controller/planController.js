const PlanModel = require("../model/plansModel");
const ServiceModel = require("../model/serviceModel");
const { options } = require("../router/adminRoute");
const { service } = require("./serviceController");
const path = require('path')

exports.plans = (req, res) => {
  PlanModel.find()
    .populate([{ path: "service", options: { strictPopulate: false } }])
    .then((data1) => {
      ServiceModel.find()
        .then((data2) => {
          res.render("plans", {
            title: "plan details",
            planDetailsData: data1,
            serviceData: data2,
            adminData: req.admin,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addPlans = (req, res) => {
  const planData = new PlanModel({
    serviceId: req.body.serviceId,
    serviceplanname: req.body.serviceplanname,
    bplanname: req.body.bplanname,
    bdescription: req.body.bdescription,
    bplan1: req.body.bplan1,
    bplan2: req.body.bplan2,
    bplan3: req.body.bplan3,
    bplan4: req.body.bplan4,
    splanname: req.body.splanname,
    sdescription: req.body.sdescription,
    splan1: req.body.splan1,
    splan2: req.body.splan2,
    splan3: req.body.splan3,
    splan4: req.body.splan4,
    aplanname: req.body.aplanname,
    adescription: req.body.adescription,
    aplan1: req.body.aplan1,
    aplan2: req.body.aplan2,
    aplan3: req.body.aplan3,
    aplan4: req.body.aplan4,
  });

  planData.save().then((result) => {
    if (result) {
      console.log(result, "plans data added");
      return res.redirect("/admin/plans");
    }
  }).catch((err) => {
      console.log(err, "Error saving plan details");
    });
};



exports.plansEdit =(req,res)=>{
  const editId = req.params.id
  PlanModel.findById(editId)
  .then((planED)=>{
    console.log(planED);
    res.render('plansEdit', {planED,
      title: "Plans Edit Form"
    })
  }).catch((err)=>{
    console.log(err, 'error')
  })
}

exports.updateplans = (req, res) => {
  const planId = req.body.planId;
  const serviceplanname = req.body.serviceplanname;
  const  bplanname = req.body.bplanname;
  const  bdescription = req.body.bdescription;
  const  bplan1 = req.body.bplan1;
  const  bplan2 = req.body.bplan2;
  const  bplan3 = req.body.bplan3;
  const  bplan4 = req.body.bplan4;
  const  splanname = req.body.splanname;
  const  sdescription = req.body.sdescription;
  const  splan1 = req.body.splan1;
  const  splan2 = req.body.splan2;
  const  splan3 = req.body.splan3;
  const  splan4 = req.body.splan4;
  const  aplanname = req.body.aplanname;
  const  adescription = req.body.adescription;
  const  aplan1 = req.body.aplan1;
  const  aplan2 = req.body.aplan2;
  const  aplan3 = req.body.aplan3;
  const  aplan4 = req.body.aplan4;

  PlanModel.findById(planId)
  .then((updatedPlans) => {
      updatedPlans.serviceplanname = serviceplanname;
      updatedPlans.bplanname = bplanname;
      updatedPlans.bdescription = bdescription;
      updatedPlans.bplan1 = bplan1;
      updatedPlans.bplan2 = bplan2;
      updatedPlans.bplan3 = bplan3;
      updatedPlans.bplan4 = bplan4;
      updatedPlans.splan_name = splanname;
      updatedPlans.sdescription = sdescription;
      updatedPlans.splan1 = splan1;
      updatedPlans.splan2 = splan2;
      updatedPlans.splan3 = splan3;
      updatedPlans.splan4 = splan4;
      updatedPlans.aplan_name = aplanname;
      updatedPlans.adescription = adescription;
      updatedPlans.aplan1 = aplan1;
      updatedPlans.aplan2 = aplan2;
      updatedPlans.aplan3 = aplan3;
      updatedPlans.aplan4 = aplan4;
      return updatedPlans.save();
    })
  .then((updatedPlans) => {
      console.log(updatedPlans, 'successfully updated in the database');
      res.redirect('/admin/plans');
    })
  .catch((err) => {
      console.log(err, 'error');
      res.status(500).send('Error updating plans');
    });
};