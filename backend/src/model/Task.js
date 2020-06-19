const mongoose = require('../config/database');
// const timeZone = require('mongoose-timezone');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  macaddress: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  when: {
    type: Date,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

// TaskSchema.plugin(timeZone, { paths: ['when', 'created'] });

module.exports = mongoose.model('Task', TaskSchema);
