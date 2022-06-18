const express = require("express"); 
const mongoose = require('mongoose')
const app = express(); 
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

// routes
const authRoute = require("./routes/auth"); 
const usersRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
// use routes
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/movies", movieRoute)


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