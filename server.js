const express = require("express")
var cors = require('cors')
const app = express()
const userController = require("./HackaUserController")
const therapistController  = require("./TherapistController")
require("./dbConnection").getDbConnection()
app.use(cors({
  origin: 'http://localhost:19006',
  methods: 'GET,POST', // Specify the allowed HTTP methods
  optionsSuccessStatus: 204, // Return a 204 status code for preflight requests
}));

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
