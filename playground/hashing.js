const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword ='$2a$10$E7TW8I2gzMR0ND.iTrxyMeDl9tIhIMMwoCDuUkkY2jWYU/649UDte';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});


// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abc');
// var decodedToken = jwt.verify(token, '123abc')
// console.log(token);
// console.log(decodedToken.id === data.id);

// example of JSON Web Token(JWT) Standard without the jwt library

// var message = 'I am user number 3';
// var hashedMessage = SHA256(message).toString();
// console.log(message);
// console.log(hashedMessage);
// console.log(SHA256(message).toString() === hashedMessage);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// console.log(token);

// // token.data.id = 5;

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log("Data was not changed.")  ;
// } else {
//   console.log("Data was changed. DO NOT TRUST!");
// }

