const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/officedata',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected to office  data")

}).catch((err)=>{
    console.log(err)
})
    