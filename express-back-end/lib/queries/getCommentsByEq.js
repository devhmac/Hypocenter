const db = require('../db');

// test query
const getCommentsByEq = (earthquakeId) => {

  const queryString = `
  SELECT users.username, comments.user_id, comments.id AS comment_id, comments.content FROM comments
  JOIN users ON users.id = comments.user_id
  WHERE earthquake_id = $1
  ORDER BY comments.id DESC`;
  const queryParams = [earthquakeId];

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows;
    });

};

module.exports = {

  getCommentsByEq

};
