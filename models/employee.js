const Mongoose=require('mongoose')
const employeeSchema=Mongoose.Schema(
    {
        name:String,
        location:String,
        position:String,
        salary:Number
    
    }
  );

  var employeeModel=Mongoose.model("Employees", employeeSchema);
  module.exports=employeeModel