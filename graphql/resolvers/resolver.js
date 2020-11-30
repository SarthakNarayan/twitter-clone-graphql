let Tweet = require("../../models/tweets");

const Query = {
  tweet: async () => {
    try {
      const tweets = await Tweet.find();
      return tweets;
    } catch (error) {
      throw new Error(error);
    }
  },
};

const Mutation = {
  addTweet: async (_, args) => {
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
