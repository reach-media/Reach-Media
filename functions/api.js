exports.handler = function(event,context,callback){
    const axios = require("axios")
    if(event.httpMethod === 'POST') {
        const requestBody = JSON.parse(event.body);
        console.log(requestBody)
        const newValue = updateDatabase(requestBody);
        callback(null, {
          statusCode: 200,
          body: "great"
        });
      } else {
        callback(null, {
          statusCode: 400,
          body: "aweseome"
        });
      }
    // make sure method is get
    // if(event.httpMethod == "GET") {
    //     getUsers()
    // }
 
}

// const express = require("express")
// const serverless = require("serverless-http");

// const app = express()


// const router = express.Router()
// router.get("http://localhost:9000/.netlify/functions/api", (req,res) => {
//     res.json({
//         "hello": "hi"
//     })
// })

// app.use("./netlify/functions/api", router)



// module.exports.handler = serverless(app)
