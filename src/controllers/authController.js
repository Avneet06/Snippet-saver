const bcrypt=require("bcrypt");
const pool=require("../config/db")
const jwt=require("jsonwebtoken")

exports.register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        if(!name || !email || !password){
            return res.status(200).json({message:"All fields are required"});
        }

        const existingUser=await pool.query("SELECT * FROM users WHERE email=$1",[email]);   //$1 means 1st vlues in the array 
        if(existingUser.rows.length>0){
            return res.status(409).json({message:"Email already registered"});
        }
        const HashedPassword=await bcrypt.hash(password,10);

        await pool.query(
            "INSERT INTO users (name,email,password) VALUES ($1,$2,$3)",[name,email,HashedPassword]
        );
        res.status(201).json({message:"Registeration Successfull"});
    }catch(err){
        console.error("registeration failed:",err);
        res.status(500).json({message:"Server Error"})
    }
}

exports.login=async(req,res)=>{
    try{
        const{email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({message:"Email and Password required"});
        }

        const userResult=await pool.query("SELECT * FROM users WHERE email=$1",[email]);
        if(userResult.rows.length===0){
            return res.status(401).json({message:"Invalid credentials"});
        }
        const user=userResult.rows[0];

        const match=await bcrypt.compare(password,user.password);
        if(!match){
            return res.statys(401).json({message:"invalid password"});
        }

        const token=jwt.sign(
            {
                userId:user.id,email:user.email
            },"12345rjdfghtj",{expiresIn:"1hr"}
        )
        res.status(200).json({message:"Successfully login ",token})
    }catch(err){
        console.log("Login error",err);
        res.status(500).json({message:"Server Error"});
    }
}