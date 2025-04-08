const pool=require("../config/db")
exports.createTask=async(req,res)=>{
    try{
        const{title,description}=req.body;
        const userId=req.user.userId;
        if(!title){
            return res.status(400).json({message:"title is required"});
        }
        const result=await pool.query( "INSERT INTO tasks (user_id, title, description) VALUES ($1, $2, $3) RETURNING *",
      [userId, title, description || null])
    

    res.status(201).json({
        message: "Task created ",
        task: result.rows[0]
      });
    } catch (err) {
      console.error("Create task error:", err);
      res.status(500).json({ message: "Server error" });
    }

}