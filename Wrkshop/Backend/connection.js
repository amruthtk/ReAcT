const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://amruth0911:123456789A.@cluster0.ffdbpqb.mongodb.net/kmct?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('Connected !'))
.catch((err)=>console.log(err))