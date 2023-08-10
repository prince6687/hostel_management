const mongoose = require ('mongoose');

const schema = new mongoose.Schema ({
    student_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }, 
    student_email : {
        type : String,
        required : true
    },
    student_disability: {
        type : Boolean,
        required : true
    },
    status : { 
        type : String,
        enum: ["AC", "RJ", null,"RC"],
        default : null
    },
    institute:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Institutes'
    },
    reason: String
},{
    timestamps:true
})
const Application = mongoose.model ('application', schema);
module.exports=Application;