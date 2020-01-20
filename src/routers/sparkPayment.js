const express = require('express');
const sparkPayment = express.Router();
const Razorpay = require('razorpay');
const crypto =require('crypto');
const mongoose = require('mongoose');
const Spark = require('../models/Spark');
const { sendMail } = require('../utils/mailer');
const sgMail = require('@sendgrid/mail');
const api_key='rzp_live_vSJo0A6arOnhAR';
const secret_key='uBE8D5xm22xzHjXtHgUw73Um';

const instance = new Razorpay({
  key_id: api_key,
  key_secret: secret_key
});

sparkPayment.post('/pay', (req, res)=>{

  const {body} = req;
  instance.orders.create({
    amount: 35000,
    currency: 'INR',
    receipt: Date.now()/1000,
    payment_capture: 1
  }).then((response)=>{

    let spark = new Spark({
      ...body,
      order_id: response.id
    });
    spark.save().catch((err)=>{
      console.log(err);
    });
    res.send({
      orderID: response.id,
      key: api_key
    });
  }).catch((err)=>{
    console.log(err);
    res.send(err);
  });

});

sparkPayment.post('/success', (req,res)=>{
  console.log(req.body);
  const expectedHash= crypto.createHmac('sha256', secret_key)
    .update(req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id)
    .digest('hex');

  if(expectedHash === req.body.razorpay_signature){
    Spark.updateTransactionId(req.body.razorpay_order_id, req.body.razorpay_payment_id, req.body.razorpay_signature).then((spark)=>{

      res.redirect('/form/spark/success/'+spark._id);

    }).catch((err)=>{
      res.status(500).send(err);
    });
  }
  else{
    res.status(400).send();
  }
});


module.exports = sparkPayment;