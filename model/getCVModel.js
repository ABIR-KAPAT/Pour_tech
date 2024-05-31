const mongoose=require('mongoose')
const Schema=mongoose.Schema

const getCVSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  
  },
  address: {
    type: String,
    required: true,
    
  },
  zip: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    
  },
  cv: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const GetCVModel = new mongoose.model('GetCV', getCVSchema);

module.exports = GetCVModel;
