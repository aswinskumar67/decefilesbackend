const express = require ('express');
const router = express.Router();
const verify = require('./verifytoken');
const files = require('../models/files');
//{owner : req.user.ethadd}

router.get('/',verify, async (req,res) =>{

    const posts= await files.find({})
    res.send(posts);

});
router.get('/:id',verify, async (req,res) =>{
    console.log("hii")
    const post= await files.findById(req.params.id)
    res.send(post);

});
module.exports = router;