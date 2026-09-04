import express from "express";
import cors from "cors";
import database from "./dbconfig.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json()); 

app.get("/",(req,res)=>{
    res.send("Student Manager Server Running");
});

app.get("/students",(req,res)=>{
    database.query("SELECT * FROM students",(err,result)=>{
        if(err){
            return res.json(err)
        }
        res.json(result)
    })
});

app.post("/students",(req,res)=>{
      const{id,name,age,course} = req.body
      const query = "INSERT INTO students (id,name,age,course) VALUES (?,?,?,?)"
      database.query(query,[id,name,age,course],(err,result)=>{
        if(err){
            return res.json(err)
        }
        res.json(result)
     })  
});

app.put("/students/:id",(req,res)=>{
     const id=req.params.id
     const{name,age,course}=req.body
     const query="UPDATE students SET name=?,age=?,course=? WHERE id=?"
     database.query(query,[name,age,course,id],(err,result)=>{
        if(err){
            return res.json(err)
        }
        res.json(result)
     })
});

app.delete("/students/:id",(req,res)=>{
    const id=req.params.id
    const query="DELETE FROM students WHERE id=?"
    database.query(query,[id],(err,result)=>{
        if(err){
            return res.json(err)
        }
        res.json(result)
    })
}); 

app.listen(port,()=>{
    console.log(`Student Manager Server Running on ${port}`);
}); 

