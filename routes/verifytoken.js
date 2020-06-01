const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = function (req, res, next) {
    const token = req.cookies.token
        if (!token) return res.status(401).send("Access Denied , Try Loggin in again");

        try{
            const verified = jwt.verify(token,process.env.TOKEN);
            req.user= verified;
            console.log(req.user);
            next();
        } catch(err){
            res.status(400).send("Invalid token");
        }
}