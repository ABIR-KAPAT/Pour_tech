const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    phoneNumber: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    mapLink: { 
        type: String, 
        required: true 
    },
  },
  { timestamps: true }
);

const ContactModel = new mongoose.model("contact", ContactSchema);
module.exports = ContactModel;
