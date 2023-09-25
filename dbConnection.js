const mongoose = require("mongoose")

module.exports.getDbConnection = function(){
    mongoose.connect("mongodb+srv://shahabhi1411:Abhi0273@cluster0.3drxg0m.mongodb.net/Digital_Donation?retryWrites=true&w=majority").then(()=>{
        console.log("DbConnected...");
        
    }).catch(()=>{
        console.log("error..");
    })
}