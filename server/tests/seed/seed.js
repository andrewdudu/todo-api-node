const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

var userOneId = new ObjectID();
var userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'andrew@wijaya.com',
  password: 'andrewwijaya',
  tokens: {
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }
}, {
  _id: userTwoId,
  email: 'andre@wijaya.com',
  password: 'andreww'
}]

const todos = [{
  _id: new ObjectID(),
  text: 'First test todooo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo'
}]

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos)
  }).then(() => done())
}

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
    // return User.insertMany(users)
    // it works but we need to use save() to hash the password from middleware
  }).then(() => done())
}

module.exports = {todos, populateTodos, users, populateUsers};
