const mongoose = require('mongoose');
const { config } = require('./config');

const mongoUrl = `mongodb+srv:\/\/${config.db.dbUser}:${config.db.dbPasswd}@${config.db.dbHost}/${config.db.dbName}`;

async function connectDB () {

  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.info('Connection with db successfully!!');
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error);
    process.exit(1);
  }

  return connection;
}

module.exports = connectDB;
