// exports.handler = function(event,context,callback){
//     const axios = require("axios")
//     if(event.httpMethod === 'POST') {
//         const requestBody = JSON.parse(event.body);
//         console.log(requestBody)
//         const newValue = updateDatabase(requestBody);
//         callback(null, {
//           statusCode: 200,
//           body: "great"
//         });
//       } else {
//         callback(null, {
//           statusCode: 400,
//           body: "aweseome"
//         });
//       }
// }
'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser);
app.get("/api", (req, res) => {
res.json({"hello": "hi"})
});

module.exports.handler = serverless(app);