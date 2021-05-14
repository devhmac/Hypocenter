const db = require('../db');

// test query
const getCommentsByEq = (earthquakeId) => {

  const queryString = `
  SELECT * FROM comments WHERE earthquake_id = $1
    `;

  const queryParams = [earthquakeId];

  db.query(queryString, queryParams);

};

module.exports = {

  getCommentsByEq

};
