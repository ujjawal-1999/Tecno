const express = require('express');
const paymentRoute = express.Router();
const Razorpay = require('razorpay');
const crypto =require('crypto');
const mongoose = require('mongoose');
const Workshop = require('../models/workshop');
const { sendMail } = require('../utils/mailer');
const sgMail = require('@sendgrid/mail');
const api_key='rzp_live_vSJo0A6arOnhAR';
const secret_key='uBE8D5xm22xzHjXtHgUw73Um';

const instance = new Razorpay({
  key_id: api_key,
  key_secret: secret_key
});

paymentRoute.post('/pay', (req, res)=>{
  const {body} = req;
  Workshop.findOne({ email: body.email, payment_id:{$ne: null} }).then((wrks)=>{
    if(wrks){
      res.status(400).send({
        success: false,
        error: 'email',
        message: 'Email already registred'
      });
    }
    else{
      instance.orders.create({
        amount: body.amount,
        currency: 'INR',
        receipt: Date.now()/1000,
        notes:{
          ...body
        },
        payment_capture: 1
      }).then((response)=>{
        console.log('RESPONSE', response);
        let workshop = new Workshop({
          ...body,
          order_id: response.id
        });
        workshop.save().catch((err)=>{
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
    }
  }).catch((err)=>{
    console.log(err);
    res.status(500).send({
      message: 'Unable To Process Request'
    })
  });
});

paymentRoute.post('/success', (req,res)=>{
  console.log(req.body);
  const expectedHash= crypto.createHmac('sha256', secret_key)
    .update(req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id)
    .digest('hex');

  if(expectedHash === req.body.razorpay_signature){
    Workshop.updateTransactionId(req.body.razorpay_order_id, req.body.razorpay_payment_id, req.body.razorpay_signature).then((workshop)=>{
      sendMail(workshop.payment_id, '15 Jan - 19 January 2020', workshop.name, 'Drone Workshop' ,workshop.email);
      res.redirect('/form/workshop/success/'+workshop._id);
    }).catch((err)=>{
      res.status(500).send(err);
    });
  }
  else{
    res.status(400).send();
  }
});

paymentRoute.get('/pp', (req,res)=>{
  sendMail(12345, '1 Feb-3 Feb', 'Aryan Singh', 'Drone Workshop' ,'aryan.major@gmail.com');
})

module.exports = paymentRoute;