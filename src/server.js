const app=require ("./app");
require ("dotenv").config();



const PORT= 8080;
console.log("🚀 server.js is loaded!");



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})