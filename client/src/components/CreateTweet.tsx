import React, { useState } from "react";
import "../styles/CreateTweet.css";

const initialInput = {
  tweet: "",
  username: "",
};

const CreateTweet: React.FC = () => {
  const [input, setInput] = useState(initialInput);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tweet = {
      description: input.tweet,
      username: input.username,
    };
    window.location.href = "/";
    setInput(initialInput);

    // logic for sending it to backend
  };

  const inputCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <h1>Add tweet</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-group">
          <label htmlFor="tweet">Tweet</label>
          <input
            type="text"
            className="form-control"
            id="tweet"
            aria-describedby="tweet"
            required
            name="tweet"
            onChange={(e) => inputCapture(e)}
            value={input.tweet}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username"
            required
            name="username"
            onChange={(e) => inputCapture(e)}
            value={input.username}
          />
        </div>

        <div className="button">
          <button type="submit" className="btn btn-primary">
            Add Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTweet;
