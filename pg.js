const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'aryan.major@gmail.com',
  from: 'siddhartha@tecnoesis.com',
  subject: 'Welcome To Tecnoesis 2020',
  text: 'Registration Success for Campus Ambassdor Program for Tecnoesis 2020.',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);