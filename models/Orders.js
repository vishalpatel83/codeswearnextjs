import mongoose from "mongoose";

const OrderSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    products:[
        {
            productId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
    address:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        required:true,
        default:'pending'
    },

},{timestamps:true});
export default mongoose.model("Order",OrderSchema);