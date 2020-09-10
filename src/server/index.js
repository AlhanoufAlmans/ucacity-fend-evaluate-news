var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(express.static('dist'))
const AYLIENTextAPI = require('aylien_textapi');
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors())

const dotenv = require('dotenv')
dotenv.config()

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/address', acqData)

function acqData(req, res){
    console.log('in ')
    const textapi = new AYLIENTextAPI({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    textapi.sentiment({
     'url': req.body.text
         }, (error, response)=>{
            console.log('API response from Aylien Callback', response, error)
             res.send(response)
         })}




// designates what port the app will listen to for incoming requests
//8081  ?? 8080
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

