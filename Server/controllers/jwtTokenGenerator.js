const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = "something secret for access token";
const REFRESH_TOKEN_SECRET = "something secret for refresh token";

const RefreshTokenGenerator = (username) =>{
      return jwt.sign(username,REFRESH_TOKEN_SECRET,{algorithm:'HS256',expiresIn:'15d'});
}

const AccessTokenGenerator = (username) =>{
    return jwt.sign(username,ACCESS_TOKEN_SECRET,{algorithm:'HS256',expiresIn:'15min'});
}

module.exports = {RefreshTokenGenerator,AccessTokenGenerator};