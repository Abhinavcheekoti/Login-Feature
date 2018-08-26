var express = require('express');
var router = express.Router();
var userModel = require("../schemas/user");

router.get('/',function(req,res,next){
    res.render('layout');
})

router.post("/",function(req,res,next){
    console.log("req.body is", req.body);
    let name = req.body.name;
    let id = req.body.id;
    let roomNo = req.body.roomno;
    userModel.create({
        name : name,
        id : id,
        roomNo : roomNo
  },function(err,data){
    if(err) console.log(err);
    else console.log("Saved !");
  })
    res.redirect("/sign-up");
  })

module.exports = router;