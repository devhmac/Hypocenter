const db = require('../db');

// test query
const addNotification = (notification) => {

  const queryString = `
    INSERT INTO notifications (country, magnitude, user_id)
    VALUES ($1, $2, $3)
    `;

  const queryParams = [notification.country, notification.magnitude, notification.user_id];

  db.query(queryString, queryParams);

};

module.exports = {

  addNotification

};
