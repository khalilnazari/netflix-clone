const express = require("express")
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js"); 
const verifyJwt = require("../verifyToken");

// Fetch user
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Fetch all users
router.get("/", verifyJwt, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
      try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed to see all users!");
    }
});


// Fetch user Stats
router.get("/stats", async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);
  
    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data); 

    } catch (err) {
        res.status(500).json(err);
    }
});


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


// user stats
router.get("/stats", async (req, res) => {
    const today = new Date(); 
    const lastYear = today.setFullYear(today.setFullYear() -1); 
    const months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    // const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            }, {
                $group: {
                    _id: "$month", 
                    total: {$sum:1}
                }
            }
        ])

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports = router;