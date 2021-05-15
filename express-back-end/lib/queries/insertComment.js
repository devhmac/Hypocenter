const db = require('../db');

// test query
const insertComment = (commentObj) => {


  const queryString = `
    INSERT INTO comments (content, user_id, earthquake_id)
    VALUES ($1, $2, $3)
    `;

  const queryParams = [commentObj.content, commentObj.user_id, commentObj.earthquake_id];

  return db.query(queryString, queryParams);


};

module.exports = {
  insertComment
};
