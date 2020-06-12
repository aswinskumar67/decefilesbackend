const router = require('express').Router();
const User = require('../models/user');
const registerRoute = require('./register');
const logoutRoute = require('./logout')
const uploadRoute = require('./upload');
const verify = require ('./verifytoken')

router.use('/register',registerRoute);
router.use('/upload',uploadRoute);
router.use('/logout',logoutRoute);

router.get('/',verify,async (req,res)=> {

        res.send("Success");
    
    });


module.exports = router;