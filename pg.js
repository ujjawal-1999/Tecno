const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'aryan.major@gmail.com',
  from: 'entries@tecnoesis.com',
  subject: 'Welcome To Tecnoesis 2020',
  text: 'Registration Success for Campus Ambassdor Program for Tecnoesis 2020.',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);