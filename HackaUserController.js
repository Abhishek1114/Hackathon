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
module.exports.login = async function(req,res){
    
    let email = req.body.email 
    let password = req.body.password 

    let user = await UserModel.findOne({email:email})
    
    if(user && user.password == password){
        res.json({msg:"login successfull",data:req.body,rcode:200})
    }
    else{
        res.json({"msg":"Invalid",rcode:-9})
    }
}

module.exports.getAllUsers = async function(req,res)
{
    UserModel.find().then(data=>{
        res.json({msg:"users retrived",data:data,rcode:200})
    }).catch(err=>{
        res.json({msg:"error",rcode:-9})
    })
}
