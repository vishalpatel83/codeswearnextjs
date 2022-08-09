import Product from "../models/Products";
import connectDb from "../middleware/mongoose";

const handler=async (req,res)=>{
    if(req.method=== 'post'){
    for(let i=0;i<req.body.length;i++){
    let p= new Product({
        title:req.body[i].title,
        desc:req.body[i].desc,
        slug:req.body[i].slug,
        img:req.body[i].img,
        category:req.body[i].category,
        size:req.body[i].size,
        color:req.body[i].color,
        prize:req.body[i].title,
        availableQuantity:req.body[i].availableQuantity
    

    })
    await p.save();
}
res.status(200).json({success:"success"})
}
else{
    res.status(400).json({error:"this method is not allowed"})
}
 }
 
 export default connectDb(handler);