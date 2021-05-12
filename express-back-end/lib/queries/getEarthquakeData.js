const { response } = require('express');
const db = require('../db');

// test query
const getEarthquakeData = (limit = 20) => {
  return db.query('SELECT * FROM earthquakes LIMIT $1', [limit])
    .then((response) => {
      return response.rows;
    });
};

module.exports = {

  getEarthquakeData

};