const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({
//   completed: false
// }).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove("587f90ef49d6c8ee1b9565b5").then((todo) => {
  console.log(todo);
});