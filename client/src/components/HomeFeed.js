import React, { useContext } from "react";
import SmallTweet from "./SmallTweet";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";
import SpinnerComponent from "./SpinnerComponent";
import ComposeTweet from "./ComposeTweet";

const HomeFeed = () => {
  const { tweets } = useContext(TweetContext);

  if (!tweets) {
    return (
      <SpinnerComponent />
    )
  }

  return (
  <Wrapper>   
    <ComposeTweet />
    {tweets.tweetIds.map((tweetId) => {
      const tweet = tweets.tweetsById[tweetId]
        return (
          <SmallTweet tweet={tweet} />
        )
    })}
  </Wrapper>
  )
};

const Wrapper = styled.div` 
  width: 750px;
`;

export default HomeFeed;
