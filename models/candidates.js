const mongoose = require("mongoose")

const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    party:{
        type:String,
        reuired:true
    },
    age:{
        type:Number,
        required:true
    },
    votes:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:'User',
                required:true
            },
            voteAt:{
                type:Date,
                default:Date.now()
            }
        }
    ],
    voteCount:{
        type:Number,
        default:0
    }    
})

const Candidate  = mongoose.model("Candidate",candidateSchema)
module.exports = User