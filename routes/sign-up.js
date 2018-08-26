var express = require('express');
var router = express.Router();
var userModel = require("../schemas/user")

router.get("/",(req,res,next)=>{
    console.log("In signup");
    
})
router.post("/",(req,res,next)=>{
    let userName = req.body.userName;
    let passwd = req.body.passwd;    
    userModel.find({
        name:userName
    },function(err,data){
        if(err) console.log("Error!");
        if(data.passwd == passwd)
        {
            res.render("home",{name:userName});
        }
    })


})




module.exports = router;