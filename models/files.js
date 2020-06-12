const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    
    name: {
        type: String,
        required:true,
    },
    desc: {
        type:String,
        required:true,
    },
    price :{
        type:Number,
        required:true
    },
    
    hash: {
        type:String,
        required:true,
    },
    owner: {
        type: String,
        required:true,
    }

});

module.exports = mongoose.model('files',fileSchema);