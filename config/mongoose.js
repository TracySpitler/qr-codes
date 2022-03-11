const mongoose = require('mongoose');

// EXAMPLE STRING: mongodb://username:password@hostname:port/database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Database connected successfully!') );

module.exports = db;
