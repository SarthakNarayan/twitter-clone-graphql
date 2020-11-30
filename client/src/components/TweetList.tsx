import React from "react";
import { useQuery, gql } from "@apollo/client";
import SingleTweet from "./SingleTweet";

// material ui imports
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ALL_TWEETS = gql`
  query {
    tweet {
      username
      tweet
      _id
    }
  }
`;

interface Tweet {
  __typename: string;
  username: string;
  tweet: string;
  _id: string;
}

const TweetList = () => {
  const { loading, error, data } = useQuery(ALL_TWEETS);
  const classes = useStyles();

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Some error occurred</h1>;

  return (
    <Grid container className={classes.root} spacing={4}>
      {data.tweet.map((tweet: Tweet) => (
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <SingleTweet key={tweet._id} {...tweet}></SingleTweet>
        </Grid>
      ))}
    </Grid>
  );
};

export default TweetList;
