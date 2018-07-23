
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'greenleradounaud@gmail.com',
    pass: 'gamine87'
  }
});

var mailOptions = {
  from: 'greenleradounaud@gmail.com',
  to: 'greenleradounaud@gmail.com',
  subject: 'alexis le noob',
  text: 'alexis le noob! alexis le noob! alexis le noob!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
