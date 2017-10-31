const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59f7d0ee38f6f72d6be07772'}).then((todo) => {
  
})

Todo.findByIdAndRemove('59f7d0ee38f6f72d6be07772').then((todo) => {
  console.log(todo);
});
