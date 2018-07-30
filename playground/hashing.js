const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   })
// })

var hashedPass = '$2a$10$.Qf6gko6unk5LNUidUA3Iu2RzS8wQZ9g47CRodj7ZobahekWDf4ye';

bcrypt.compare(password, hashedPass, (err, res) => {
  console.log(res);
})

// var data = {
//   id: 10
// }

// var token = jwt.sign(data, '123abc');
// console.log(token);



// var message = 'andrew';
// var hash = SHA256(message).toString();

// var data = {
//   id: 4
// }
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }