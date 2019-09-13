require("dotenv").config();
const express = require("express")
const app = express()
const { json } = require("body-parser");
const nodemailer = require('nodemailer');
app.use(json());

exports.handler = function(event, context, callback) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  
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
    to: "yusefdaramay@yahoo.com",
    subject: "A comment on your post",
    text: "Something Happened",
    html: `<b>Somebody commented on your Post!</b>
    Awesome!
    ${event.body}
    `
  };
  
  //   The person's name is ${name}, with the email address ${email}.
  //   The phone number is ${phone} from the company ${company}.
  //   This is the message: ${message}
  
  
  // transporter.sendMail({
    //     from: process.env.MAIL_LOGIN,
    //     to: process.env.MAIL_TO,
    //     subject: process.env.SUBJECT + new Date().toLocaleString(),
    //     text: event.body
    // }, function(error, info) {
      // 	if (error) {
        // 		callback(error);
        // 	} else {
          // 		callback(null, {
            // 		    statusCode: 200,
            // 		    body: "Ok"
            //     	});
            // 	}
            // });
            transporter.sendMail(mailOptions, function(err, res) {
              if (err) {
                callback(err);
              } else {
                callback(null, {
                  statusCode: 200,
                  body: `${JSON.parse(event.body)}`
                })
              }
            });
            
          }