const mongoose = require('mongoose')


var schema = mongoose.Schema(
    {
        Name: String,
        Age: Number,
        Corse: String,
        Department: String
    }
)


var StudModel = mongoose.model("Stud", schema)
module.exports = StudModel