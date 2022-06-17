const express = require("express"); 
const mongoose = require('mongoose')
const app = express(); 
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

// routes
const authRoute = require("./routes/auth")

// mongodb 
const mongodbUrl = process.env.MONGO_URL; 
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology : true,
})
.then(() => console.log("DB connected Successfully!"))
.catch(err=>console.log(err))

// connet authRoute
app.use("/api/auth", authRoute)

const PORT = 8800; 
app.listen(PORT, () => console.log(`Server is runing on port: ${PORT}`))