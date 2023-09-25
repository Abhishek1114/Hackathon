const express = require("express")
var cors = require('cors')
const app = express()
const userController = require("./HackaUserController")
const therapistController  = require("./TherapistController")

const cors = require('cors');

// Configure CORS for a specific origin
app.use(cors({
  origin: 'http://localhost:19006',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
}));

require("./dbConnection").getDbConnection()

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.post('/HackaSignup',userController.signup);
app.post("/therapistSignup",therapistController.signup);
app.post("/UserLogin",userController.login);

app.listen(9811,(err)=>{
    if(!err){
        console.log("Listening to port...")
    }
})
