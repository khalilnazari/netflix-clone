const express = require("express")
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js") // hash password
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt( // enctypt password 
          req.body.password, 
          process.env.SECRET_KEY
      ).toString()
    });

    try {
      const user = await newUser.save(); // .save() create new user
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
});



//Login
router.post('/login', async (req, res) => {
  try {
    // fetch the user 
    const user = await User.findOne({email: req.body.email}); 
    
    // check if the user exist 
    !user && res.status(401).json("Wrong username or password!")

    // fetch password & decrypt 
    const encryptedPass = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY); 
    const originalPassword = encryptedPass.toString(CryptoJS.enc.Utf8); 

    // check if password match 
    originalPassword !== req.body.password && res.status(401).json("Wrong username or password!")

    // create access token 
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin }, 
      process.env.SECRET_KEY, 
      {expiresIn: "2d"}
    )
    // destructure password and the rest
    const {password, ...info }=user._doc; 
    res.status(200).json({...info, accessToken })
    // respond 
  } catch (error) {
    res.status(500).json(error)
  }
})


module.exports = router;