const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const addProduct =require("./models/addProduct")
app.use(cors())


app.get("/",(req,res)=>{
    res.send("add")

})

app.post("/view",(req,res)=>{
    res.send("view")
})
app.listen(8083,()=>{
    console.log("server started")
})