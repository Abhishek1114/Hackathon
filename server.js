const express = require("express")
var cors = require('cors')
const app = express()
const userController = require("./HackaUserController")
const therapistController  = require("./TherapistController")
require("./dbConnection").getDbConnection()

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.post('/HackaSignup',cors(),userController.signup);
app.post("/therapistSignup",cors(),therapistController.signup);
app.post("/UserLogin",cors(),userController.login);

app.listen(9811,(err)=>{
    if(!err){
        console.log("Listening to port...")
    }
})
