const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    full_Name:String,
    gender:String,
    dob:Date,
    email:String,
    phone_no:String,
    clinic_hosp_name:String,
    license:{type:String,required:true},
    cli_hosp_address:String
})

module.exports = mongoose.model("Therapist",UserSchema)