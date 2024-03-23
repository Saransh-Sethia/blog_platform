const jwt = require("jsonwebtoken");

const authenticateToken = async(req,res,next) => {
    const authHeaders = req.headers['authorization'];

    const token = authHeaders && authHeaders.split(' ')[1];

    if(token == null){
        res.sendStatus(401) //unauthorized
    }

    jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
        if(err){
            res.sendStatus(403) //forbidden

        }
        req.user = user;
        next();
    })
};

module.exports = authenticateToken;