import mongoose from "mongoose";

const Schema = mongoose.Schema;

// 4 fields
const tweetSchema = new Schema(
  {
    username: { type: String, required: true },
    tweet: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Tweets = mongoose.model("Tweets", tweetSchema);
module.exports = Tweets;
