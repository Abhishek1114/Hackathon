const express = require("express")
var cors = require('cors')
const app = express()
const userController = require("./UserController")
require("./dbConnection").getDbConnection()
app.use(cors())

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.post('/HackaSignup',userController.signup);

app.listen(9811,(err)=>{
    if(!err){
        console.log("Listening to port...")
    }
})