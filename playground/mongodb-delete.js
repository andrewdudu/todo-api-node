// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to database');

  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').deleteOne({name: 'Andrew'}).then((result) => {
  //   console.log(result.result);
  // })

  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result.result);
  // })

  // db.collection('Users').deleteOne({name: 'Jen'}).then((result) => {
  //   console.log(result.result);
  // })

  db.collection('Users').findOneAndDelete({name: 'Dudu'}).then((result) => {
    console.log(result);
  })

  // db.close();
})