const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv/config');
router.get('/',(req,res) => {
    res.send("We are on register");

});
router.post('/',async (req,res)=>{
    console.log(req.body);
    //Check for existing email
    const emailExists = await User.findOne({email : req.body.email});
    if(emailExists) return res.status(400).send("Email Exists");
    const ethaddExists = await User.findOne({ethadd : req.body.ethadd});
    if(ethaddExists) return res.status(400).send("Ethereum Address Exists");

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.pass,salt);

    //New user
    const user = new User({
        email : req.body.email ,
        pass : hashedpassword,
        ethadd :req.body.ethadd

    });
    user.save()
    .then(data => {
        res.json({ user:user.email})
    })
    .catch(err =>{
        res.json({message : err});
    })
    ;

});

router.post('/login',async (req,res) =>{
    const user = await User.findOne({email : req.body.email});
    if(!user) return res.status(400).send("Email or password is wrong");
    const ethaddExists = await User.findOne({ethadd : req.body.ethadd});
    if(!ethaddExists) return res.status(400).send("Ethereum Address does no Exist");

    //passwordiscorrect
    const validPassword = await bcrypt.compare(req.body.pass,user.pass);
    if(!validPassword) return res.status(400).send("Email or password wrong");

    //create and assign a token
    const token = jwt.sign({ethadd : user.ethadd},process.env.TOKEN);
    res.cookie("token", token).send(token);
    res.end;
   
});


module.exports = router;