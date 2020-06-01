const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required:true,
    },
    pass: {
        type:String,
        required:true,
    },
    ethadd :{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('users',userSchema);