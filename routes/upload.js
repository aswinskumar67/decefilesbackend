const express = require ('express');
const router = express.Router();
const Files = require('../models/files');



router.post('/',(req,res)=>{
    console.log(req.body);
    const file = new Files({
         name : req.body.name ,
        desc : req.body.desc,
        price :req.body.price,
        hash :req.body.hash,
        owner:req.body.owner

    });
    file.save()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json({message : err});
    })
    ;

});


module.exports = router;