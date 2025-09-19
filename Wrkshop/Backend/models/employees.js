const mongoose = require('mongoose')

var schema = mongoose.Schema(

    {
        Name:String,
        Age:Number,
        Dept:String,
        Sal:Number
    }
)
var EmployeesModel=mongoose.model("KmctEmployee",schema)
module.exports=EmployeesModel