var sesAccessKey = '<yusefdaramay@yahoo.com>'
var sesSecretKey = '<Beylacode23>'

 exports.handler = function(event, context, callback) {

  	var nodemailer = require('nodemailer');
  	var smtpTransport = require('nodemailer-smtp-transport');

  	var transporter = nodemailer.createTransport(smtpTransport({
	    service: 'gmail',
	    auth: {
	        user: sesAccessKey,
	        pass: sesSecretKey
	    }
  	}));

  	var text = 'Email body goes here';

  	var mailOptions = {
	    from: '<yusefdaramay@yahoo.com',
	    to: '<yusefdaramay@yahoo.com>',
	    bcc: '<bcc yousufdaramay@yahoo.com>',
	    subject: 'Test subject',
	    text: text
  	};

  	transporter.sendMail(mailOptions, function(error, info){
      if(error){
        const response = {
          statusCode: 500,
          body: JSON.stringify({
            error: error.message,
          }),
        };
        callback(null, response);
      }
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Email processed succesfully!`
        }),
      };
      callback(null, response);
    });
}