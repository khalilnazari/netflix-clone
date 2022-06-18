const express = require("express")
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js"); 
const verifyJwt = require("../verifyToken");

// Fetch user
router.get('/find/:id', async (req, res) => {
    try {
        await User.findById(req.params.id);
        res.status(200).json("User has been deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
})

// Fetch users


// Fetch user Stats


// Update
router.put('/:id', verifyJwt, async (req, res) => {
    // if id = url id OR user is admin
    if(req.user.id === req.params.id || req.user.isAdmin) {
        // if there is password, encrypt it
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt( // enctypt password 
                req.body.password, 
                process.env.SECRET_KEY
            ).toString();
        }

        // update
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                {
                    $set: req.body,
                },
                { new: true }
            );

            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You can update only your own account!");
    }
})

// Delte
router.delete('/:id', verifyJwt, async (req, res) => {
    // if id = url id OR user is admin
    if(req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted!")

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You can delete only your own account!");
    }
})

module.exports = router;