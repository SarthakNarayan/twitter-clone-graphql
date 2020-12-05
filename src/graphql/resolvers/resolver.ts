let Tweet = require("../../models/tweets");

interface tweet {
  tweetInput: tweetInput;
}

interface tweetInput {
  tweet: String;
  username: String;
}

const Query = {
  tweet: async () => {
    try {
      // sorting is for showing the most random tweet on top
      const tweets = await Tweet.find().sort({ createdAt: "desc" });
      return tweets;
    } catch (error) {
      throw new Error(error);
    }
  },
};

const Mutation = {
  addTweet: async (_: undefined, args: tweet) => {
    const { username, tweet } = args.tweetInput;
    const newTweet = new Tweet({ username, tweet });

    try {
      const { _id } = await newTweet.save();
      return {
        username,
        tweet,
        _id,
      };
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = { Query, Mutation };
