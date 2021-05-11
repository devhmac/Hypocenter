const { response } = require('express');
const db = require('../db');


const earthquakes = function() {
  return db.query('SELECT * FROM earthquakes LIMIT $1')
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};

module.exports = {

  earthquakes

};
