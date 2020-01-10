const mongoose = require('mongoose');
const validator = require('validator');

const WorkshopSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true,
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
    },
    workshop:{
        type: String,
        required: true,
    },
    order_id:{
        type: String,
        required: true
    },
    payment_id:{
        type: String,
        default: null
    },
    payment_sign:{
        type: String,
        default: null
    }
});

WorkshopSchema.statics.updateTransactionId=function(order_id, payment_id, payment_sign){
    if(payment_id && payment_sign){
        return Workshop.findOneAndUpdate({order_id}, { $set: { payment_id,payment_sign  } }).then((workshop)=>{
            return Promise.resolve(workshop);
        }).catch((err)=>{
            return Promise.reject(err);
        });
    }
};

const Workshop = mongoose.model('Workshop',WorkshopSchema);

module.exports = Workshop;