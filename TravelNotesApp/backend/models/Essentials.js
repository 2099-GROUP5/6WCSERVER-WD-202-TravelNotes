const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ess = new Schema({
    name: { 
      type: String
    }
  }, {
    collection: 'essentials'
  })
module.exports = mongoose.model('ess', ess) 