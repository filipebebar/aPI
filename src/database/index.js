const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbname', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;