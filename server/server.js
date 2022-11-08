const express = require("express"); 
const cors = require("cors");
const app = express();      
const PORT = 8000
require('dotenv').config();
const cookieParser = require('cookie-parser')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use(cors({
    origin:"http://localhost:3000", credentials: true
}),
);


require('./config/mongoose.config')

require('./routes/office.routes')(app)
require('./routes/user.routes')(app)



app.listen(PORT,()=>{
    console.log(`server is up on port ${PORT}`)
})