const mongoose = require('mongoose');

const postcomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    cdes:{
        type:String,
        required:true
    },
    cimg:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('createpost', postcomSchema);