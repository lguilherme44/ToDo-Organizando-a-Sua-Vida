const mongoose = require('mongoose');

const url = 'mongodb+srv://dev:dev@cluster-desenv-oncrb.gcp.mongodb.net/todo';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = mongoose;
