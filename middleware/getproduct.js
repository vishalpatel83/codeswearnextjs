import Products from "../models/Products";
import { connectDb } from "./mongoose";
// import connectDb from "../middleware/mongoose";

const handler=async (req,res)=>{
   let products=await Product.find()
   res.status(200).json({products})
}

export default connectDb(handler);


// [{ "title":"req.body[i].title",
//         "desc":"req.body[i].desc",
//         "slug":"req.body[i].slug",
//         "img":"req.body[i].img",
//         "category":"req.body[i].category",
//         "size":"req.body[i].size",
//         "color":"req.body[i].color",
//         "prize":"req.body[i].title",
//         "availableQuantity":"req.body[i].availableQuantity"}]
