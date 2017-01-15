const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB Server.');
  }
  console.log('Connected to MongoDB server!');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5878fa79e00d943d2bd8eaee")}).then((result) => {
    console.log(result);
  })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((document) => {
  //   console.log(document);
  // });


  db.close();
});