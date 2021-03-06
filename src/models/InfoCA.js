const mongoose = require('mongoose');
const validator = require('validator');

const caSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        validate(value) {
            if(!validator.isMobilePhone(value)){
                throw new Error('Mobile Number is Invalid')
            }
        }
    },
    whatsapp:{
        type:String,
        required:true,
        validate(value) {
            if(!validator.isMobilePhone(value)){
                throw new Error('Mobile Number is Invalid')
            }
        }
    },
    institute:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required: true
    },
    zip:{
        type:Number,
        required:true
    }
});


const CA = mongoose.model('CA',caSchema);

module.exports = CA;