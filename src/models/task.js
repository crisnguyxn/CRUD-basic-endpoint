const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'Name must be provided'],
        maxlength:[20,'Name can not be more 20 characters']
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('task',TaskSchema)
