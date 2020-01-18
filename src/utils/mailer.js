const sgMail = require('@sendgrid/mail');
const mustache = require('mustache');
const fs = require('fs');
const path=require('path');
var content = fs.readFileSync(path.join(__dirname, "../../public/misc/mail.html"), 'utf-8');

  
sgMail.setApiKey('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');
const sendMail = function(ID, date, name, event, tomail){
  const data={
    ID,
    date,
    event,
    name
  };
  if(ID==="NULL (No Kit)"){
    data.ID="Free Event";
  }
  const output = mustache.render(content, data);
  const msg = {
    to: tomail,
    from: {
      email: 'entries@tecnoesis.org',
      name: 'Tecnoesis 2020'
    },
    fromname:'Tecnoesis 2020',
    subject: 'Welcome To Tecnoesis 2020',
    text: 'Registered for Event.',
    html: output,
  };
  sgMail.send(msg);
};

module.exports={sendMail};