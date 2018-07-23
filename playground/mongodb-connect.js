// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to database');

  // db.collection('Todos').insertOne({
  //   name: 'Andrew',
  //   age: 19
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert document', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 19
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert document', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.close();
})