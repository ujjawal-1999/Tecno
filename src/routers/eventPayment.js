const express = require('express');
const eventPayment = express.Router();
const Razorpay = require('razorpay');
const crypto =require('crypto');
const mongoose = require('mongoose');
const Event = require('../models/Event');
const { sendMail } = require('../utils/mailer');
const api_key='rzp_live_vSJo0A6arOnhAR';
const secret_key='uBE8D5xm22xzHjXtHgUw73Um';

const instance = new Razorpay({
  key_id: api_key,
  key_secret: secret_key
});

eventPayment.post('/pay', (req, res)=>{
  const {body} = req;
  console.log(body);
  Event.findOne({ email: body.email, module: body.module, event: body.event, payment_id:{$ne: null} }).then((event)=>{
    if(event){
      res.status(400).send({
        success: false,
        error: 'email',
        message: 'Email already registred'
      });
    }
    else{
      let event = new Event({
        ...body,
        order_id: '12345'
      });
      event.save().catch((err)=>{
        console.log(err);
      });
      // instance.orders.create({
      //   amount: body.fee*100,
      //   currency: 'INR',
      //   receipt: Date.now()/1000,
      //   notes:{
      //     ...body
      //   },
      //   payment_capture: 1
      // }).then((response)=>{
      //   console.log('RESPONSE', response);
      //   let event = new Event({
      //     ...body,
      //     order_id: response.id
      //   });
      //   event.save().catch((err)=>{
      //     console.log(err);
      //   });
      //   res.send({
      //     orderID: response.id,
      //     key: api_key
      //   });
      // }).catch((err)=>{
      //   console.log(err);
      //   res.send(err);
      // });
    }
  }).catch((err)=>{
    console.log(err);
    res.status(500).send({
      message: 'Unable To Process Request'
    })
  });
});

eventPayment.post('/success', (req,res)=>{
  console.log(req.body);
  const expectedHash= crypto.createHmac('sha256', secret_key)
    .update(req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id)
    .digest('hex');

  if(expectedHash === req.body.razorpay_signature){
    Event.updateTransactionId(req.body.razorpay_order_id, req.body.razorpay_payment_id, req.body.razorpay_signature).then((event)=>{
      sendMail(event.payment_id, '15 Jan - 19 January 2020', event.name, event.event ,event.email);
      res.redirect('/form/workshop/success/'+workshop._id);
    }).catch((err)=>{
      res.status(500).send(err);
    });
  }
  else{
    res.status(400).send();
  }
});

eventPayment.get('/pp', (req,res)=>{
  sendMail(12345, '1 Feb-3 Feb', 'Aryan Singh', 'Drone Workshop' ,'aryan.major@gmail.com');
})

module.exports = eventPayment;