require("./lib/db");
const Express = require("express");
const request = require("request-promise-native");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8000;
const { getEarthquakeData } = require("./lib/queries/getEarthquakeData.js");
const { searchForNotifications } = require("./lib/queries/searchForNotifications.js");
const { upsert } = require("./lib/queries/upsert.js");
const { addNotification } = require("./lib/queries/addNotification.js");
const { getRecentEarthquakes } = require("./lib/queries/getRecentEarthquakes");
const { getCommentsByEq } = require('./lib/queries/getCommentsByEq');
const { insertComment } = require('./lib/queries/insertComment');
const { addDemoEq } = require('./lib/queries/addDemoEq');
const { deleteDemoEq } = require('./lib/queries/deleteDemoEq');
const Pusher = require("pusher");
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


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
  getEarthquakeData(400).then((response) => {
    res.json(response);
  });
});

App.post("/api/comments", (req, res) => {
  insertComment(req.body);
  res.status(200).send("OK");
});

App.get('/api/comments/:id', (req, res) => {
  getCommentsByEq(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    });
});

// Demo earthquake for presentation

App.get('/api/demoON', (req, res) => {
  console.log('add');
  addDemoEq()
    .then((response) => {
      console.log('Demo Earthquake Added');
      pusher.trigger("quakes", "new-earthquakes", {
        earthquakes: response.rows
      });
    });
  res.status(200).send("OK");
});

App.get('/api/demoOFF', (req, res) => {
  deleteDemoEq()
    .then(() => {
      console.log('Demo Earthquake Deleted');
    });
  res.status(200).send("OK");
});

App.post("/api/notifications", (req, res) => {

  addNotification(req.body);

  res.status(200).send("OK");
});

const getEarthquakes = function() {
  return request(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"
  );
};

const seen = {};

const fn60sec = function() {

  getEarthquakes()
    .then(upsert)
    .then(getRecentEarthquakes)
    .then((res) => {
      if (res.length > 0) {
        let actualNewEarthquakes = [];
        for (let eq of res) {
          if (!seen[eq.id]) {
            actualNewEarthquakes.push(eq);
            seen[eq.id] = true;
          }
        }
        if (actualNewEarthquakes.length > 0) {
          console.log("new pushed quake", actualNewEarthquakes);

          pusher.trigger("quakes", "new-earthquakes", {
            earthquakes: actualNewEarthquakes,
          });

          searchForNotifications(actualNewEarthquakes[0].title)
            .then((response) => {

              for (let email of response) {

                const emailContent = `There was a new Earthquake located ${actualNewEarthquakes[0].title} <br> Magnitude: ${actualNewEarthquakes[0].magnitude} <br> Pager Alert Status: ${actualNewEarthquakes[0].pager} <br> For more information check it out at Hypocenter.`;

                const msg = {
                  to: email,
                  from: 'hypocentermail@gmail.com',
                  subject: 'New Earthquake Alert.',
                  text: "Earthquake Mail",
                  html: '<h4>' + emailContent + '<br><br></h4><strong>Hypocenter</strong>',
                };

                sgMail
                  .send(msg)
                  .then(() => {
                    console.log('Email sent');
                  });

              }
            });
        }
      }
    })
    .catch((err) => console.log("err", err));
  console.log("polling api");
};

const firstRun = function() {
  getEarthquakes()
    .then((res) => {
      const initialEqs = JSON.parse(res);
      const earthquakes = initialEqs.features;
      for (let earthquake of earthquakes) {
        seen[earthquake.id] = true;
      }
    });
};

firstRun();
fn60sec();
setInterval(fn60sec, 60000);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
