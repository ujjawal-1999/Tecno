const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const mustache = require('mustache');
const fs = require('fs');
const path=require('path');
var content = fs.readFileSync(path.join(__dirname, "../../public/misc/mail.html"), 'utf-8');

  
sgMail.setApiKey('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');

router.get('/sendMail',(req,res)=>{
  var emails= ["ahmedtanveer802@gmail.com", "danial.nits.cse@gmail.com", "elvisrahman4@gmail.com", "raushankumar2310@gmail.com", "Hritikagrahari786@gmail.com", "suryans254@gmail.com", "poojasri00c@gmail.com", "uthraasenthilkumar@gmail.com", "goutham0307@gmail.com", "utkarshsinhacse.gmail.com", "rahulsah9854@gmail.com", "thalapraveen2k@gmail.com", "rajat77460@gmail.com", "bajoriayash1@gmail.com", "wajahatyusuf8@gmail.com", "turquoisepastels@gmail.com",  "ritikkumarrrp@gmail.com", "shivaom1907@gmail.com", "yashsrivastava3@gmail.com", "rsayandeeproy69@gmail.com"];
  const output = mustache.render(content, {
  });
  const msg = {
    to: 'aryan.major@gmail.com',
    from: {
      email: 'hacks@tecnoesis.org',
      name: 'NITS Hacks 3.0'
    },
    cc: emails,
    fromname:'NITS Hacks 3.0',
    subject: 'Reminder for Solution Submission',
    text: 'Today is the last day for idea submission',
    html: output,
  };
  sgMail.send(msg);
});

module.exports = router;