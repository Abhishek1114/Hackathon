const Therapist  = require("./TherapistModel")

module.exports.signup = async function(req,res){
    let therapist =new Therapist({
        full_Name:req.body.full_name,
        gender:req.body.gender,
        dob:req.body.dob,
        email:req.body.email,
        phone_no:req.body.phone_no,
        clinic_hosp_name:req.body.clinic_hosp_name,
        license:req.body.license,
        cli_hosp_address:req.body.clinic_hosp_name
        });
    therapist.save();
    res.json({msg:"therapist added",data:therapist,rcode:200})
}
