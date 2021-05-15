const db = require('../db');

// test query
const upsert = (body) => {
  const bodyParse = JSON.parse(body);
  const earthquakes = bodyParse.features;

  for (let earthquake of earthquakes) {

    if (earthquake.properties.alert === null) {
      earthquake.properties.alert = "green";
    }

    const queryString = `
    INSERT INTO earthquakes (id, title, magnitude, pager, longitude, latitude, depth, tsunami, time_stamp)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    ON CONFLICT (id) DO UPDATE SET title = $2, magnitude = $3, pager = $4, longitude = $5, latitude = $6, depth = $7, tsunami = $8, time_stamp = $9`;

    const queryParams = [
      earthquake.id,
      earthquake.properties.place,
      earthquake.properties.mag,
      earthquake.properties.alert,
      earthquake.geometry.coordinates[0],
      earthquake.geometry.coordinates[1],
      earthquake.geometry.coordinates[2],
      earthquake.properties.tsunami,
      earthquake.properties.time,
      'now()'
    ];

    db.query(queryString, queryParams);

  }
};

module.exports = {

  upsert

};
