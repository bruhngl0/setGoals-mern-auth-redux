const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {

    user:{
        type: mongoose.Schema.Types.ObjectId,  //we need to know which user created the goal. so to know                                                     
        required: true,                        //that, we added a user property to the goal model that fetches
        ref: 'User',                           //the _id from userModel to the goalModel. this way the created goal is linked to the user

        },
    text: {
        type: String,
        required: [true, 'please add a text value']
        }
    },

    {
    timestamps: true,
    }
)

module.exports = mongoose.model('Goal', goalSchema)