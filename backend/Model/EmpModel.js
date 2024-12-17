const mongoose=require("mongoose");

const { Schema } = mongoose;

const empschema=new Schema({
    name:{
        type:String,//data type
        required:true,//validation part 
    },
    description:{
        type:String,//data type
        required:true,//validation part 
    },
    post:{
        type:String,//data type
        required:true,//validation part 
    }
});

module.exports=mongoose.model(
    "EmpModel"//file name
    ,empschema//function name
)