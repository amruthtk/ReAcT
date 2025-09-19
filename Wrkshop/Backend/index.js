const express=require('express')
require('./connection')
var Empmodel=require("./models/employees")
var cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post("/add",async(req,res)=>{
    try {
        await Empmodel(req.body).save()
        res.send("Data added!")
    }
    catch (error){
        console.log(error)
    }
    })

    app.get("/view",async(req,res)=>{
    try {
        const v=await Empmodel.find()
        res.send(v)
    }
    catch (error){
        console.log(error)
    }
    })

    app.delete("/remove/:id",async(req,res)=>{
    try {
        await Empmodel.findByIdAndDelete(req.params.id)
        res.send("Data Deleted!")
    }
    catch (error){
        console.log(error)
    }
    })

    app.put("/update/:id",async(req,res)=>{
    try {
        await Empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send("Data Updated!")
    }
    catch (error){
        console.log(error)
    }
    })


app.listen(3004,()=>{
    console.log("port is running at 3004")
})