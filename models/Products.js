import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    size:{
        type:String,
    },
    color:{
        type:string
    },
    prize:{
        type:Number,
        required:true
    },
    availableQuantity:{
        type:Number,
        requird:true
    }

},{timestamps:true});
export default mongoose.model("Product",ProductSchema);