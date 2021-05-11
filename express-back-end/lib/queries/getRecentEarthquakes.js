const { response } = require('express');
const db = require('../db');

// test query
const getRecentEarthquakes = (limit = 20) => {
  return db.query(
    `SELECT * FROM earthquakes
    WHERE added BETWEEN NOW() - INTERVAL '119 SECONDS' AND NOW()`)
    .then((response) => {
      return response.rows;
    });
};

module.exports = {

  getRecentEarthquakes

};
