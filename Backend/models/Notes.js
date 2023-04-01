const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true,
        unique: true
    },
    tag:{
        type: String,
        default: "General"
    }
  });

  
  module.exports =mongoose.model('notes', NotesSchema);