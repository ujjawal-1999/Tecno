const express = require('express');
const caRouter = express.Router();
const mongoose = require('mongoose');
const CA = require('../models/InfoCA');

caRouter.post('/register', (req, res)=>{
  let ca = new CA(req.body);
  ca.save().then(()=>{
    res.send(req.body);
  }).catch((err)=>{
    res.status(400).send(err);
  })
});

caRouter.get('/fetchAll', (req, res)=>{
  // res.send(req.body);
  CA.find().then((cas)=>{
    res.send(cas);
  }).catch((err)=>{
    console.log(err);
    res.send(err);
  });
});

module.exports = caRouter;