require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer")
const app = express();
app.use(express.json())
const {SERVER_PORT} = process.env

// app.use( express.static( `${__dirname}/../build` ) );


app.post('/api/contact', async function(req,res){
    console.log("hit")
    const { name, email, phone, company, interestedIn, message } = req.body
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
     
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD // generated ethereal password
        }
    });
    let info = await transporter.sendMail({
        from: req.body.email, // sender address
        to: "reachmediawin@gmail.com", // list of receivers
        subject: interestedIn, // Subject line
        text: `name : ${name},  email:  ${email} phone: ${phone}, Company: ${company}`,// plain text body
        html: message // html body
    });
    res.status(200).json("ok")
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
})




// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
//   });

app.listen(SERVER_PORT, () => {
    console.log(`I am listening on ${SERVER_PORT}`)
})