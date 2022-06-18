const jwt = require("jsonwebtoken")

function verifyJwt(req, res, next) {
    // messager header 
    const authHeader = req.headers.token;
    
    if(authHeader) {
        // get jwt token form the header 
        const token = authHeader.split(" ")[1];
        
        // verify 
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if(err) res.status(403).json("Token is expired!"); 
            req.user = user; 
            next();
        })
    } else {
        return res.status(401).json("You are not authenticated!")
    }
}

module.exports = verifyJwt; 