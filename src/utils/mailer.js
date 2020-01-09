const sgMail = require('@sendgrid/mail');
const mustache = require('mustache');
const fs = require('fs');
const path=require('path');
var content = fs.readFileSync(path.join(__dirname, "../../public/misc/mail.html"), 'utf-8');

  
sgMail.setApiKey('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');
const sendMail = function(ID, date, name, event, tomail){
  const output = mustache.render(content, {
    ID,
    date,
    event,
    name
  });
  const msg = {
    to: tomail,
    from: 'entries@tecnoesis.com',
    fromName:'Tecnoesis',
    subject: 'Welcome To Tecnoesis 2020',
    text: 'Registered for Workshop.',
    html: output,
  };
  sgMail.send(msg);
};

module.exports={sendMail};
