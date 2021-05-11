require("./lib/db");
require("dotenv").config({ path: ".env" });
const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const cors = require("cors");
const Pusher = require("Pusher");
const Datastore = require("nedb");
const PORT = 8000;
const { getTestEq } = require("./lib/queries/test.js");
const db = new Datastore();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

App.set("port", process.env.PORT || 5000);
const server = App.listen(App.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(cors());

// Sample GET route
App.get("/", (req, res) => {
  getTestEq(1).then((response) => {
    res.json(response);
  });
});

// sends all existing comments to the client on load
App.get("/api/data", (req, res) => {
  console.log("commmmment");
  db.find({}, (err, data) => {
    if (err) return res.status(500).send(err);

    res.json(data);
  });
});

// receives a comment from the client, saves it to the in-memory database and triggers a new Channels event.
// App.get("/", (req, res) => {
//   console.log("commmmment");
//   db.find({}, (err, data) => {
//     if (err) return res.status(500).send(err);

//     res.json(data);
//   });
// });

App.post("/comment", (req, res) => {
  console.log("commmmment");
  db.insert(Object.assign({}, req.body), (err, newComment) => {
    if (err) {
      return res.status(500).send(err);
    }

    Pusher.trigger("comments", "new-comment", {
      comment: newComment,
    });

    res.status(200).send("OK");
  });
});

// once a new vote is received, the record is updated in the database and we trigger the new-vote event with the updated comment in its payload.
// This allows us to update the vote count on each comment as soon as they happen.
App.post("/vote", (req, res) => {
  const { id, vote } = req.body;
  db.findOne({ _id: id }, function (err, doc) {
    if (err) {
      return res.status(500).send(err);
    }

    db.update(
      { _id: id },
      { $set: { votes: doc.votes + vote } },
      { returnUpdatedDocs: true },
      (err, num, updatedDoc) => {
        if (err) return res.status(500).send(err);

        Pusher.trigger("comments", "new-vote", {
          comment: updatedDoc,
        });
      }
    );
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
