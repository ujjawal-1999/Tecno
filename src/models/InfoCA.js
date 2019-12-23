const mongoose = require('mongoose');
const validator = require('validator');

const infoSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    emailId:{
        type:String,
        required:true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    mobileNumber:{
        type:String,
        required:true,
        validate(value) {
            if(!validator.isMobilePhone(value)){
                throw new Error('Mobile Number is Invalid')
            }
        }
    },
    whatsAppNumber:{
        type:Number,
        required:true,
        validate(value) {
            if(!validator.isMobilePhone(value)){
                throw new Error('Mobile Number is Invalid')
            }
        }
    },
    instituteName:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String
    },
    postalCode:{
        type:Number,
        required:true
    }
})


const Info = mongoose.model('Info',infoSchema);

module.exports = Info;