const {Pool}=require ("pg");       //....> can be written as const pg = require("pg") then const Pool = pg.Pool;;

require("dotenv").config();

const pool=new Pool({
    connectionString:process.env.DB_URL,})


    pool.connect()
    .then(()=>console.log("Connected to postgresSql"))
    .catch((err)=>console.log("Postgres connection error",err));

    module.exports=pool;