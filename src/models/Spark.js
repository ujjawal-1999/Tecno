const mongoose = require('mongoose');
const validator = require('validator');

const SparkSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true
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
    hostel:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    size:{
        type: String,
        required: true
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

SparkSchema.statics.updateTransactionId=function(order_id, payment_id, payment_sign){
    if(payment_id && payment_sign){
        return Spark.findOneAndUpdate({order_id}, { $set: { payment_id,payment_sign  } }).then((spark)=>{
            return Promise.resolve(spark);
        }).catch((err)=>{
            return Promise.reject(err);
        });
    }
};

const Spark = mongoose.model('Spark',SparkSchema);

module.exports = Spark;