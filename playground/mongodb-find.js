const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB Server.');
  }
  console.log('Connected to MongoDB server!');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58792d17e345b1c5b150b915')
  // }).toArray().then((result) => {
  //   console.log(JSON.stringify(result, null, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Angela'}).toArray().then((result) => {
    console.log(`Todos: ${JSON.stringify(result, null, 2)}`)
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.close();
});