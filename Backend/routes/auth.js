const { json } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require('bcrypt');


router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/signup", (req, res) => {
  const { name, userName, email, password } = req.body;
  if(!name || !email || !userName || !password){
    return res.status(422).json({error:"Please fill all the fields"});
  }
  USER.findOne({$or:[{email:email}, {userName:userName}]}).then((savedUser)=>{
    if(savedUser){
        return res.status(422).json({error:"User already exist"})
    }

    bcrypt.hash(password, 12).then((hashedPassword)=>{
        const user = new USER({ 
            name, 
            userName, 
            email, 
            password:hashedPassword
        })
    
        user.save()
        .then(user => { res.json({ message: "Registered successfully" }) })
        .catch(err => { console.log(err) })
    })
  })

});

module.exports = router;
