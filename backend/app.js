console.log("Start");

//pass = nZOB2Sh7cJdWNEtv

const express=require("express");
const mongoose=require("mongoose");
//insert router
const router=require("./Route/EmpRoute");

const app=express();
const cors=require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/employees", router); 


mongoose.connect("mongodb+srv://admin:nZOB2Sh7cJdWNEtv@cluster0.ndrdz.mongodb.net/")
.then(()=>console.log("DataBase Connected"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));