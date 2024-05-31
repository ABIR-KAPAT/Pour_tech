const mongoose = require('mongoose');
const schema = mongoose.Schema



const AdminSchema = schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    admin:{
      type:Boolean,
      default:false
    },
    status: {
        type: Boolean,
        default: true
    }
})

const AdminModel = mongoose.model("admin", AdminSchema)

module.exports = AdminModel