const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            required: true, // auth required
            unique: true, // users should be unique
        },
        email: {
            type:String,
            required: true, // auth required
            unique: true, // email should be unique
        },
        password: {
            type:String,
            required: true, // auth required
        },
        profilePicture: {
            type:String,
            default: ''
        },
        isAdmin: {
            type:Boolean,
            default: false
        },
    }, 
    {
        timestamps: true
    }
);

module.export = mongoose.model("User", UserSchema);