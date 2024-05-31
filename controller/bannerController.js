const BannerModel = require("../model/bannerModel");

exports.banner = (req, res) => {
  BannerModel.find().then((data) => {
    if (data) {
      res.render("banner", {
        banner: data,
        adminData: req.admin,
      });
    }
  });
};

exports.addBanner = (req, res) => {
  const bannerData = new BannerModel({
    title: req.body.title,
    banner_desc: req.body.banner_desc,
  });
  bannerData.save().then((result) => {
    if (result) {
      console.log(result, "banner added successfully");
      return res.redirect("/admin/banner");
    }
  }).catch((err)=>{
    console.log('Error', err);
  })
};



exports.bannerdelete=((req,res)=>{
  const uid=req.params.id;
  BannerModel.deleteOne({_id:uid}).then(del=>{
      console.log(del,'deleted');
      res.redirect('/admin/banner')
  }).catch(err=>{
      console.log(err);
  })
})