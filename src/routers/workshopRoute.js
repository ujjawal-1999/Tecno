const express = require('express');
const workshopRoute = express.Router();
const mongoose = require('mongoose');
const Workshop = require('../models/workshop');

workshopRoute.post('/register', (req, res)=>{
  let workshop = new Workshop(req.body);
  workshop.save().then(()=>{
    res.send(req.body);
  }).catch((err)=>{
    if(err.name === 'MongoError' && err.code===11000){
      res.status(400).send({
        success: false,
        error: 'email',
        message: 'Email already registred'
      })
    }
    else{
      res.status(400).send(err);
    }
  })
});

workshopRoute.get('/fetchAll', (req, res)=>{
  // res.send(req.body);
  Workshop.find().then((cas)=>{
    res.send(cas);
  }).catch((err)=>{
    console.log(err);
    res.send(err);
  });
});

workshopRoute.get('/fetchWorkshop/:id', (req, res)=>{
  // res.send(req.body);
  Workshop.findById(req.params.id).then((wrks)=>{
    res.send(wrks);
  }).catch((err)=>{
    console.log(err);
    res.status(400).send(err);
  });
});

module.exports = workshopRoute;