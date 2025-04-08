const jwt=require("jsonwebtoken");

const authmiddleWare=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({ message: "Unauthorized: No token provided" });

    }
    const token=authHeader.split(" ")[1];

    try{
        const decode=jwt.verify(token,"12345rjdfghtj");
        req.user=decode;
        next();
    }catch(err){
        return res.status(401).json({message:"Unauthorized: Invalid Token"})
    }
}

module.exports=authmiddleWare;