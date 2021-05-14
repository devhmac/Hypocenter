const db = require('../db');

// test query
const getCommentsByEq = (earthquakeId) => {

  const queryString = `
  SELECT users.username, comments.user_id, comments.content FROM comments
  JOIN users ON users.id = comments.user_id
  WHERE earthquake_id = $1`;
  const queryParams = [earthquakeId];

  db.query(queryString, queryParams)
    .then((response) => {
      return response.rows;
    });

};

module.exports = {

  getCommentsByEq

};
