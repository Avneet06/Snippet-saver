const express=require("express");
const app=express();
const routes=require('./routes')
const authRouter=require("./routes/authRoute")
const taskRoutes = require("./routes/taskRoutes");




app.use(express.json()); //to parse incoming json
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
  });


  
  
app.use('/api',routes)

app.use("/api/tasks", taskRoutes);
app.use('/api/auth',authRouter)


app.get("/",(req,res)=>{
    res.send("Base Route Working !")
})



module.exports=app;
