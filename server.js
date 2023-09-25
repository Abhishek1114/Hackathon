const express = require("express")
var cors = require('cors')
const app = express()
const userController = require("./HackaUserController")
const therapistController  = require("./TherapistController")
require("./dbConnection").getDbConnection()

var corsOption={
    origin:'http://hackathon-ny4k.onrender.com',
    optionsSuccessStatus:200
}

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.post('/HackaSignup',cors(corsOption),userController.signup);
app.post("/therapistSignup",cors(corsOption),therapistController.signup);
app.post("/UserLogin",cors(corsOption),userController.login);

app.listen(9811,(err)=>{
    if(!err){
        console.log("Listening to port...")
    }
})
