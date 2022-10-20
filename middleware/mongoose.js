import mongoose from 'mongoose';
export const connectDb=async (handler)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req,res);
}