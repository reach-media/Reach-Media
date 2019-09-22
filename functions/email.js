require("dotenv").config();
const express = require("express")
const app = express()
const { json } = require("body-parser");
const nodemailer = require('nodemailer');
app.use(json());

exports.handler = function(event, context, callback) {
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  
  const info= JSON.parse(event.body);
  
  console.log(info)
  console.log(event.body)
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "yusefdaramay@gmail.com",
      pass: "Beylacode23"
    }
  });
  let mailOptions = {};
  
  mailOptions = {
    from: "yousufdaramay@yahoo.com",
    to: "reachmediait@gmail.com",
    subject: "A comment on your post",
    text: "Something Happened",
    html: `<b>Somebody commented on your Post!</b>
    The name of the person is ${info.name}, the phone number is ${info.phone}. Their company is ${info.company}. The email
      is ${info.email} and this the message: ${info.message}
    `
  };
            transporter.sendMail(mailOptions, function(err, res) {
              if (err) {
                callback(err);
              } else {
                callback(null, {
                  statusCode: 200,
                  body: `${JSON.parse(info)}`
                })
              }
            });
            
          }