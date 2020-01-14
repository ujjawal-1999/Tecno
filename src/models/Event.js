const mongoose = require('mongoose');
const validator = require('validator');

const EventSchema = new mongoose.Schema({
    member: [{
        type:String,
        trim:true
    }],
    teamName:{
      type: String,
      default: null
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
    zip:{
        type:Number,
        required:true
    },
    module:{
      type: String,
      required: true,
    },
    event:{
      type: String,
      required: true,
    },
    amount:{
      type: Number,
      required: true,
      default: 0
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

EventSchema.statics.updateTransactionId=function(order_id, payment_id, payment_sign){
    if(payment_id && payment_sign){
        return Event.findOneAndUpdate({order_id}, { $set: { payment_id,payment_sign  } }).then((event)=>{
            return Promise.resolve(event);
        }).catch((err)=>{
            return Promise.reject(err);
        });
    }
};

const Event = mongoose.model('Event',EventSchema);

module.exports = Event;