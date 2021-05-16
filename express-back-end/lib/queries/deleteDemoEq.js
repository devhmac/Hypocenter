const db = require('../db');

// test query
const deleteDemoEq = () => {

  let demoEq = '72 km E of Tōhoku, Japan';

  const queryString = `
  DELETE FROM earthquakes
  WHERE title = $1
    `;

  const queryParams = [
    demoEq
  ];

  return db.query(queryString, queryParams);

};

module.exports = {

  deleteDemoEq

};
