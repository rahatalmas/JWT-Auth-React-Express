const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET,REFRESH_TOKEN_SECRET} = require('./secrets.js')

const RefreshTokenGenerator = (username) =>{
      return jwt.sign({username:username},REFRESH_TOKEN_SECRET,{algorithm:'HS256',expiresIn:'7d'});
}

const AccessTokenGenerator = (username) =>{
    return jwt.sign({username},ACCESS_TOKEN_SECRET,{algorithm:'HS256',expiresIn:'1m'});
}


module.exports = {RefreshTokenGenerator,AccessTokenGenerator};