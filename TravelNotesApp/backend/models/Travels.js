const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let travels = new Schema({
  place: { 
    type: String
  },
  date: { 
    type: String
  }
}, {
  collection: 'travels'
})
module.exports = mongoose.model('Travels', travels)