const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    src:{
        type: String,
        required:true
    },
    tip:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        require:true
    }
    
})

module.exports = model('PhotoLightbox', schema)
