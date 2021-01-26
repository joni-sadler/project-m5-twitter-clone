import React, { useContext } from "react";
import SmallTweet from "./SmallTweet";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";
import SpinnerComponent from "./SpinnerComponent";
import { CurrentUserContext } from "./CurrentUserContext";
import ComposeTweet from "./ComposeTweet";

const HomeFeed = ({selectedUser}) => {
  const { tweets } = useContext(TweetContext);
  const { currentUser } = useContext(CurrentUserContext);

  if (!tweets) {
    return (
      <SpinnerComponent />
    )
  }
  
  console.log(selectedUser);
  console.log(currentUser);

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
