const express = require('express');
const paymentRoute = express.Router();
const Razorpay = require('razorpay');
const mongoose = require('mongoose');
const CA = require('../models/InfoCA');

const instance = new Razorpay({
  key_id: 'rzp_test_JIhtiDaJZIunPb',
  key_secret: 'rKHItK3ts0zn1KvyvwgFs8fY'
});

paymentRoute.get('/pay', (req, res)=>{
  instance.orders.create({
    amount: 100,
    currency: 'INR',
    receipt: 'abcde',
    payment_capture: 1
  }).then((response)=>{
    console.log(response)
    res.send(response);
  }).catch((err)=>{
    console.log('ERROR')
    console.log(err);
    res.send(err);
  });
});


module.exports = paymentRoute;