const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    serviceId: {
        type: Schema.Types.ObjectId,
        ref: "services",
        
    },
    serviceplanname: {
        type: String,
        
    },
    bplanname: {
        type: String,
        default: 'Basic Plan',
        required: true
    },
    bdescription: {
        type: String,
        
    },
    bplan1: {
        type: String,
        
    },
    bplan2: {
        type: String,
        
    },
    bplan3: {
        type: String,
        
    },
    bplan4: {
        type: String,
        
    },
    splanname: {
        type: String,
        default: 'Standard Plan',
        required: true
    },
    sdescription: {
        type: String,
        
    },
    splan1: {
        type: String,
        
    },
    splan2: {
        type: String,
        
    },
    splan3: {
        type: String,
        
    },
    splan4: {
        type: String,
        
    },
    aplanname: {
        type: String,
        default: 'Advanced Plan',
        required: true
    },
    adescription: {
        type: String,
        
    },
    aplan1: {
        type: String,
        
    },
    aplan2: {
        type: String,
        
    },
    aplan3: {
        type: String,
        
    },
    aplan4: {
        type: String,
        
    },
}, { timestamps: true});

const PlanModel = new mongoose.model("plans", PlanSchema);
module.exports = PlanModel;
