exports.handler = function(event,context,callback){
    const axios = require("axios")
    // const sending = require("../src/ContactUs.js")
    const API_URL = "https://api.github.com/users?client_id=24d7c556a4d4405150df&client_secret=287c4f7a8271799fe3fd4bacc13f1c66e93f5f72"
    const API_CLIENT_ID = "24d7c556a4d4405150df"
    const API_CLIENT_SECRET="287c4f7a8271799fe3fd4bacc13f1c66e93f5f72"

    const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`

    //send response
    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        })
    }
    //perfom api call
    const getUsers = () => {
        // console.log(sending)
        axios.get(URL)
        .then(res => send(res.data))
        .catch(err => send(err))
    }
    // make sure method is get
    if(event.httpMethod == "GET") {
        getUsers()
    }
 
}