const { response } = require('express');
const db = require('../db');

// test query
const duplicateCheck = (earthquake) => {
  const ids = earthquake.properties.ids.split(",").shift().pop().join(" ");

  const queryString = `
  SELECT COUNT(*)
  FROM earthquakes
  WHERE id in ($1)
  `;

  const queryParams = [
    earthquake
  ];

  return db.query(queryString, queryParams)
};

module.exports = {

  duplicateCheck

};
