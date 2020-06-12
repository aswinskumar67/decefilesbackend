const express = require ('express');
const router = express.Router();
const Files = require('../models/files');



router.post('/',(req,res)=>{
    console.log(req.body);
    const price = req.body.price * Math.pow(10,18)
    const file = new Files({
         name : req.body.name ,
        desc : req.body.desc,
        price :price,
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