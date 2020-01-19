const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Event = require('../models/Event');
const Workshop = require('../models/workshop');
const fs = require('fs');
const path=require('path');
const PDFDocument = require('../utils/pdfKit');

router.get('/view/event/pdf', (req,res)=>{
  const table0 = {
    headers: ["Team Name", "Mobile Number", "Fee Paid"],
    rows: []
  };
  let c=0;
  let feeDefaulter;
  if(req.query.defaulter==="1"){
      feeDefaulter={
          payment_id: null
      }
  }
  else{
      feeDefaulter={
        payment_id:{
            $ne: null
        }
      }
  }

  Event.find({...feeDefaulter, module: req.query.module, event: req.query.event}).then((events)=>{
      table0.headers[0]="Team Name";
      const doc = new PDFDocument();
      doc.pipe(res);
      doc.info={
        Title: `Participant For ${req.query.event[0].toUpperCase()}${req.query.event.slice(1)}`,
        Author: 'Tecnoesis Team',
        Subject: 'Information of Participant'
      };
      doc.image(path.join(__dirname, '../utils/logopdf.jpg'),100,0, {height: '100'});
    //   doc.fillColor('#016d85').fontSize(25).font('Helvetica-Bold').text(`TECNOESIS 2020 `, {
    //     align: 'center'
    // });
      doc.fillColor('#000').fontSize(15).font('Courier-Bold').text(`LIST FOR ${req.query.event.toUpperCase()} `, {
          align: 'center'
      });
      doc.moveDown();
      doc.moveDown();
      events.forEach((event)=>{
          table0.rows.push([event.teamName || event.member[0], event.mobile, event.fee]);
          c+=1;
          if(c===events.length){
              doc.table(table0, {
                  prepareHeader: () => doc.font('Courier-Bold'),
                  prepareRow: (row, i) => doc.font('Courier').fontSize(12)
              });
              doc.moveDown();
              doc.end();
              c=-1;
          }
      });
      if(c===events.length){
          doc.table(table0, {
              prepareHeader: () => doc.font('Helvetica-Bold'),
              prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
          });
          doc.moveDown();
          doc.end();
      }
  }).catch((err)=>{
      console.log(err)
  });
})


module.exports = router;