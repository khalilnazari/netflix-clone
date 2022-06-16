const express = require("express"); 
const mongoose = require('mongoose')
const app = express(); 

// .env config 
const dotenv = require('dotenv');
dotenv.config();


// mongodb 
const mongodbUrl = process.env.MONGO_URL; 
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology : true,
})
.then(() => console.log("DB connected Successfully!"))
.catch(err=>console.log(err))


const PORT = 8800; 
app.listen(PORT, () => console.log(`Server is runing on port: ${PORT}`))