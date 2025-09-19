const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://akhil:akhil@cluster0.aav5psr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected!'))
.catch((err)=>console.log(err))