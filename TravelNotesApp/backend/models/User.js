const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  }
}, {
  collection: 'users'
})
module.exports = mongoose.model('Student', studentSchema)