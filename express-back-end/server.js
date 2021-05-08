require('./lib/db');
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8000;
const { getTestEq } = require('./lib/queries/test.js');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => {
  getTestEq(1)
    .then((response) => {
      res.json(response);
    });
}
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
