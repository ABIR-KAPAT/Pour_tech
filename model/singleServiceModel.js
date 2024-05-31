const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SingleServiceSchema = new Schema({
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: "services",
    required: true
  },
  plansId: {
    type: Schema.Types.ObjectId,
    ref: "plans",
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  
  technology1: {
    type: String
  },
  technology2: {
    type: String
  },
  technology3: {
    type: String
  },
  technology4: {
    type: String
  },
  technology5: {
    type: String
  },
  technology6: {
    type: String
  },
  technology7: {
    type: String
  },
  technology8: {
    type: String
  },
  technology6: {
    type: String
  },
  image:[{
    type : String,
    required: true,
  }]
});

const SingleServiceModel = new mongoose.model(
  "singleservice",
  SingleServiceSchema
);
module.exports = SingleServiceModel;
