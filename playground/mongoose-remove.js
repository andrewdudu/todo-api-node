const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
})

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('5b587bfaaa8b57435a5e23a0').then((todo) => {
  console.log(todo);
})