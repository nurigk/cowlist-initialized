const db = require('../db');

module.exports = {
  getAll: function (callback) {
    let queryStr = 'select * from cows;'
    db.query(queryStr, (err, data) => {
      //console.log('getall: ',cows.id);
      callback (null, data);
    });
  },

  create: function (params, callback) {
    let queryStr = 'insert into cows (cowName, cowDescr) values (?, ?);';
    db.query(queryStr, params, (err, data) => {
      //console.log('create: ',body.name);
      callback(null, data);
    });
  }
};


