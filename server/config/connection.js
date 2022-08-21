const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, './.env' )});

//mongodb+srv://test:test@cluster0.f92hqfr.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://test:test@cluster0.f92hqfr.mongodb.net/final-project-test?retryWrites=true&w=majority
//mongodb://127.0.0.1:27017/final-project-test
// require('dotenv').config({path: path.join(__dirname, '../.env' )});



mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/final-project-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
