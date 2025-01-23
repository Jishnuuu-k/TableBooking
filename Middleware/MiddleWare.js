const jwt = require('jsonwebtoken')
const secretKey = 'mySecretKey';

module.exports.verifyToken = (req,res,next) => {
 const token = req.headers['authorization']?.split('')[1];
 if(!token){
    return res.status(403).send('Token is required');
 }
 jwt.verify(token,secretKey,(err, decoded) =>{
    if(err){
        return res.status(401).send('invalid token');
    }
    req.userId= decoded.id;
    console.log('token verified')
    next();
 })
}