const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    full_Name:String,
    gender:String,
    dob:Date,
    email:String,
    phone_no:String,
    password:String
})

module.exports = mongoose.model("Hacka_Customer",UserSchema)