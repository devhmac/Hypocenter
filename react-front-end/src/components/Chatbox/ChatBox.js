import React, { Component } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import "./ChatBox.css";

class App extends Component {
  state = {
    username: "",
    newComment: "",
    comments: [],
  };

  updateInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  postComment = (event) => {
    event.preventDefault();
    const { username, newComment } = this.state;
    if (username.trim() === "" || newComment.trim() === "") return;

    const data = {
      name: username,
      text: newComment,
      votes: 0,
    };

    axios
      .post("/comment", data)
      .then(() => {
        this.setState({
          username: "",
          newComment: "",
        });
      })
      .catch((error) => console.log(error));
  };

  vote = (id, num) => {
    axios.post("/vote", {
      id,
      vote: num,
    });
  };

  componentDidMount() {
    const pusher = new Pusher("7a7e150b8cf104d8b9b9", {
      cluster: "us3",
      encrypted: true,
    });
    const channel = pusher.subscribe("comments");
    channel.bind("new-comment", (data) => {
      this.setState((prevState) => {
        const { comments } = prevState;
        comments.push(data.comment);

        return {
          comments,
        };
      });
    });

    channel.bind("new-vote", (data) => {
      let { comments } = this.state;
      comments = comments.map((e) => {
        if (e._id === data.comment._id) {
          return data.comment;
        }

        return e;
      });

      this.setState({
        comments,
      });
    });
  }

  render() {
    const { username, newComment, comments } = this.state;

    const userComments = comments.map((e) => (
      <article className="comment" key={e._id}>
        <h1 className="comment-user">{e.name}</h1>
        <p className="comment-text">{e.text}</p>
        <div className="voting">
          <div className="vote-buttons">
            <button className="upvote" onClick={() => this.vote(e._id, 1)}>
              Upvote
            </button>
            <button className="downvote" onClick={() => this.vote(e._id, -1)}>
              Downvote
            </button>
          </div>
          <div className="votes">Votes: {e.votes}</div>
        </div>
      </article>
    ));

    return (
      <div className="App">
        <article className="post">
          <iframe
            title="video"
            width="560"
            height="315"
            src=""
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>Alert Chat</p>
        </article>
        <section className="comments-form">
          <form onSubmit={this.postComment}>
            <label htmlFor="username">Name:</label>
            <input
              className="username"
              name="username"
              id="username"
              type="name"
              value={username}
              onChange={this.updateInput}
            />

            <label htmlFor="new-comment">Comment:</label>
            <textarea
              className="comment"
              name="newComment"
              id="new-comment"
              value={newComment}
              onChange={this.updateInput}
            />
            <button type="submit">Share useful info</button>
          </form>
        </section>
        <section className="comments-section">{userComments}</section>
      </div>
    );
  }
}

export default App;