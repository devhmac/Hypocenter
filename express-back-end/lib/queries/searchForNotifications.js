const { response } = require('express');
const db = require('../db');

// test query
const searchForNotifications = (title, magnitude) => {

  const countryEq = title.split(',');
  const searchCountry = countryEq[1].split(" ").join('');

  const queryString = `
  SELECT users.email FROM notifications
  JOIN users ON users.id = notifications.user_id
  WHERE LOWER(country) LIKE LOWER($1) AND magnitude <= $2`;
  const queryParams = ["%" + searchCountry + "%", magnitude];

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows;
    });
};

module.exports = {

  searchForNotifications

};
