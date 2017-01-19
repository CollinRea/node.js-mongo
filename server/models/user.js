const mongoose = require('mongoose');
const validator = require('validator');

// {
//   email: 'andrew@example.com',
//   password: '1234234f432fsdf4g45',
//   tokens: [{
//     access: 'auth',
//     token: '234jwdkjfnksjnkjsdnkajh34j3kl2kl2kh2'
//   }]

// }

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail, 
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

module.exports = { User }