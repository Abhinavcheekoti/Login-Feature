var express = require('express');
var router = express.Router();
var userModel = require("../schemas/user")

router.get("/",(req,res,next)=>{
    res.render('layout2');  
})
router.post("/",(req,res,next)=>{
    let userName = req.body.userName;
    let passwd = req.body.passwd;    
    userModel.find({
        name:userName
    },function(err,data){
        if(err) console.log("Error!");
        if(data[0].passwd == passwd)
            {
                res.render("home",{name:userName});
            }
        else
            {
                console.log("Redirecting, passwds don't match !");
                res.redirect('/sign-up');
            }
    })

    
})




module.exports = router;