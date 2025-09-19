
const express = require("express")
require("./connection")
var StudModel = require("./models/Stud")
var cors = require('cors')


const app = express()



app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World')
})



app.post("/add", async (req, res) => {
    try {
        await StudModel(req.body).save()
        res.send("Data added!!")
    } catch (error) {
        console.log(error)
    }
})

app.get("/view", async (req, res) => {
    try {
        var data = await StudModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})




app.delete("/remove/:id", async (req, res) => {
    try {
        await StudModel.findByIdAndDelete(req.params.id)
        res.send("Data deleted!!")
    } catch (error) {
        console.log(error)
    }
})


app.put("/update/:id", async (req, res) => {
    try {
        await StudModel.findByIdAndUpdate(req.params.id, req.body)
        res.send("Data Updated")
    } catch (error) {
        console.log(error)
    }
})



app.get('/trial', (req, res) => {
    res.send('This is a Trial message')
})

app.listen(3005, () => {
    console.log("Port is running at 3005")
})