'use strict';
const jwtChecker = require('./jwt-module');

// PAYLOAD
var payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
   };

// PRIVATE and PUBLIC key
var i  = 'Mysoft corp';          // Issuer 
var s  = 'some@user.com';        // Subject 
var a  = 'http://mysoftcorp.in'; // Audience

// SIGNING OPTIONS
var signOptions = {
issuer:  i,
subject:  s,
audience:  a,
expiresIn:  "12h",
algorithm:  "RS256"
};
var token = jwtChecker.sign(payload, signOptions);
console.log("Token - " + token)

var verifyOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  ["RS256"]
   };
var legit = jwtChecker.verify(token, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));

// to do : expose an api (add middleware https://medium.com/@_aerdeljac/creating-a-rest-api-backend-using-express-js-7710d3310b79 )
//=> add a postman request with bearer => 
// => add it to rancher
// => add database