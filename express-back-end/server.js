require("./lib/db");
const Express = require("express");
const request = require("request-promise-native");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8000;
const { earthquakes } = require("./lib/queries/earthquakes.js");
const { getTestEq } = require("./lib/queries/test.js");
const { upsert } = require("./lib/queries/upsert.js");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/earthquakes", (req, res) => {
  getTestEq(400).then((response) => {
    res.json(response);
  });
});

App.get("/api/data", (req, res) => {
  getTestEq(1).then((response) => {
    res.json(response);
  });
});

App.post("/comment", (req, res) => {
  pusher.trigger("comments", "new-comment", {
    comment: req.body.newComment,
  });
  console.log("pusher triggered okay");
  res.status(200).send("OK");
});

const getEarthquakes = function () {
  return request(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"
  );
};

const fn60sec = function () {
  console.log("lets go");
  getEarthquakes().then(upsert);
};

fn60sec();
setInterval(fn60sec, 60000);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
