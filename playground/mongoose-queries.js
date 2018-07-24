const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b572da949bcffff60f5ee35';
var id = '5b55ee5c640819b8681d3fcd';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('could not find todo');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
  if (!user) {
    return console.log('could not find user');
  }

  console.log('User by Id', user);
}).catch((e) => console.log(e))