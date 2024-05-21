const nodemailer = require('nodemailer');
require("dotenv").config();





const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    },
  });
 

  
  exports.sendEmailHandler = async(req, res)=> {
    const { name, email, message,subject } = req.body;
    console.log(process.env.user, "seruser mail", process.env.pass)

    const mailOptions = {
      from: email,
      to: process.env.user,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.send('Email sent successfully');
      }
    });
  };