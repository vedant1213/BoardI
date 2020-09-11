const mongoose = require('mongoose');
const { duration } = require('moment');
const Schema = mongoose.Schema
const taskSchema = new Schema({
    taskName: String,
    taskDescription: String,
    creator: String,
    duration: Number,
    createdAt:{
        type: Date,
        default: function() { 
          return new Date(Date.now());
        }
      },
    expiresAt:{
        type: Date,
        default: function() { 
          return new Date(Date.now() + 1000*60*this.duration);
        }
      }
})
module.exports = mongoose.model('Tasks', taskSchema)