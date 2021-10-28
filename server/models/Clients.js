const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const clientSchema = new Schema({
    applicationID:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
       
      },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    minlength: 8
  },
  agent:{
    type: Schema.Types.ObjectId,
    ref: 'Agent'
  }

});
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;