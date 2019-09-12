const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
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
            `
      };
  

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
                body: "Ok"
            })
        }
      });
    
}