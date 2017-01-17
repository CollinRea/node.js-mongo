const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '587e343f54c554baa8b1a4ee';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  if(!todo) {
    return console.log('Todo not found');
  }
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo', todo);
}).catch((e) => {
  console.log(e);
});

// var id = '587c3a991406c27677474587';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

User.find(id).then((user)) => {
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('User:', user);
}).catch((e) => {
  console.log(e);
});