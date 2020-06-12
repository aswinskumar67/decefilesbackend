const express = require ('express');
const router = express.Router();


router.get('/',(req,res) => {
    console.log("Clearing cookie")
    res.clearCookie('token');
    res.send("hey")
    
});

module.exports= router;