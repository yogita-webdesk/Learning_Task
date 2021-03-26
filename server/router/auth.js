  const express = require('express')
  const router = express.Router();

  require('../db/conn')
  const User = require("../models/userSchema")

  router.get("/",(req,res)=>
  {
      res.send("hello word from router")
  })
  router.post("/register",(req,res)=>
  {
      const{name,email,work,password,phone,cpassword} = req.body;
   if(!name || !email || !work || !password || !phone || !cpassword)
      {
            return res.status(422).json({error:"please fill fields"})
      }

      User.findOne({email:email}).then((isalradythere)=>
      {
          if(isalradythere)
          {
              res.status(422).json({error:"email already exist"})
          }
          
      const user = new User({
          name,email,phone,work,password,cpassword
    });

    user.save().then(()=>
    {
        res.status(201).json({message:"user registration successfully"});
    }).catch((error)=>
    {
        res.status(500).json({error:"failed registartion"})
    })
      }).catch((err)=>
      {
          console.log(err)
      })


})
  
 
  module.exports = router