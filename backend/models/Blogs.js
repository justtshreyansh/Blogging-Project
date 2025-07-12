const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },

},{timestamp:true})

module.exports = mongoose.model('blogs',blogSchema);
