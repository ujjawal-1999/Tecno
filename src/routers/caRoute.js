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

caRouter.get('/register', (req, res)=>{
  // res.send(req.body);
  res.send('Hi');
});

module.exports = caRouter;