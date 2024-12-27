const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:false,
       
    },
    address:{
        type:String,
        required:false,
       
    },
    role:{
        type:String,
        required:false,
        default:"user"
    },
},
    {timestamps:true}
    

);

module.exports=mongoose.model("users",userSchema)