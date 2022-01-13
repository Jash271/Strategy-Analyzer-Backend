const mongoose = require('mongoose');

const JobSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        status:{
            type:Boolean
        },
        job:{
            type:[JSON]
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        result:{
            type:JSON
        },
        name:{
            type:String
        },
        pending:{
            type:Boolean
        }
    }
);

module.exports = mongoose.model('job', JobSchema);