const mongoose = require('mongoose');

const postcomSchema = new mongoose.Schema({
    ogname:{
        type:String,
        required:true
    },
    ogtype:{
        type:String,
        required:true
    },
    ogemail:{
        type:String,
        required:true
    },
    ogphone:{
        type:String,
        required:true
    },
    ogaddress:{
        type:String,
        required:true
    },
    ogdes:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('createcomgp', postcomSchema);