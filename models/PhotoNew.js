const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    drive:{
        type: String,
        required:true
    },
    tip:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
    
})

module.exports = model('PhotoNew', schema)
