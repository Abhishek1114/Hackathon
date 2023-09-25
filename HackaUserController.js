const UserModel = require("./HackaUserModel")

module.exports.signup = async function(req,res){
    let user =new UserModel({
        full_Name:req.body.Full_Name,
        gender:req.body.gender,
        dob:req.body.dob,
        email:req.body.email,
        phone_no:req.body.phone_no,
        password:req.body.password
        });
    user.save();
    res.json({msg:"user added",data:user,rcode:200})
}