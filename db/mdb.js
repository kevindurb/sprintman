const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/sprintman';

const mdb = {
  getConnection() {
    if (global.mongodb) {
      return Promise.resolve(global.mongodb);
    }

    return mdb.createConnection();
  },
  createConnection() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(url, (err, db) => {
        if (err) {
          reject(err);
        } else {
          global.mongodb = db;
          resolve(db);
        }
      });
    });
  },
};

module.exports = mdb;
