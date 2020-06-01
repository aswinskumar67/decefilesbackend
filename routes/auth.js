const router = require('express').Router();
const User = require('../models/user');
const registerRoute = require('./register');

const uploadRoute = require('./upload');

router.use('/register',registerRoute);
router.use('/upload',uploadRoute);

router.get('/',(req,res)=> {
    res.send("You are on auth page");
});



module.exports = router;