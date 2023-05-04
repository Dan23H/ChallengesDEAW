const {Schema, model} = require('mongoose')

const TaskScheme = Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

TaskScheme.method('toJSON',function() {
    const {__v,_id, ...object} = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Task', TaskScheme)