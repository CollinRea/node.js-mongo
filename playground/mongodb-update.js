const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB Server.');
  }
  console.log('Connected to MongoDB server!');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('587be62ee345b1c5b150c8f3')
  // }, {
  //   $set: {completed: true}
  // }, {
  //   returnOriginal: false 
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5878fa64b570c23d18a78917')
  }, {
    $set: {
      name: 'Robert'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});