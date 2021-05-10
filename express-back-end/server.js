require('./lib/db');
const Express = require('express');
const request = require('request-promise-native');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8000;
const { getTestEq } = require('./lib/queries/test.js');
const { upsert } = require('./lib/queries/upsert.js');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/earthquakes', (req, res) => {
  getTestEq(1)
    .then((response) => {
      res.json(response);
    });
}
);

const getEarthquakes = function() {
  return request('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson');
};

getEarthquakes()
  .then(upsert);

// const fn60sec() {
// getEarthquakes()
// }
// fn60sec();
// setInterval(fn60sec, 60000);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
