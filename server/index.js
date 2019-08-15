require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json())
const {SERVER_PORT} = process.env

// app.use( express.static( `${__dirname}/../build` ) );


app.post('/api/contact', function(req,res){
    res.status(200).json("successfull")
})


// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
//   });

app.listen(SERVER_PORT, () => {
    console.log(`I am listening on ${SERVER_PORT}`)
})