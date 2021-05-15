const db = require('../db');

// test query
const addDemoEq = () => {

  let randomId = Math.round(Math.random() * 10000);

  let rightNow = Date.now()

  let demoEq = {
    title: '72 km E of Tōhoku, Japan',
    magnitude: 9.0,
    pager: "red",
    longitude: 142.369,
    latitude: 38.322,
    depth: 29,
    tsunami: 1
  };

  const queryString = `
  INSERT INTO earthquakes (id, title, magnitude, pager, longitude, latitude, depth, tsunami, time_stamp, added)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *
    `;

  const queryParams = [
    randomId,
    demoEq.title,
    demoEq.magnitude,
    demoEq.pager,
    demoEq.longitude,
    demoEq.latitude,
    demoEq.depth,
    demoEq.tsunami,
    rightNow,
    'now()'
  ];

  return db.query(queryString, queryParams);

};

module.exports = {

  addDemoEq

};
