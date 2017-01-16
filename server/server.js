var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: { 
    type: Boolean,
    default: false

  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: ' New Todo  ',
  completed: true,
  completedAt: 130
});

// newTodo.save().then((result) => {
//   console.log('Saved todo', result)
// }, (e) => {
//   console.log('Unable to save todo');
// });

// User

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var user = new User({
  email: '123@email.com'
});

user.save().then((doc) => {
  console.log("User saved: ", doc);
}, (e) => {
  console.log("Unable to save: ", e);
})

