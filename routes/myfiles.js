const express = require ('express');
const router = express.Router();
const verify = require('./verifytoken');
const files = require('../models/files');

router.get('/',verify, async (req,res) =>{

    const posts= await files.find({owner : req.user.ethadd})
    res.send(posts);

});

module.exports = router;