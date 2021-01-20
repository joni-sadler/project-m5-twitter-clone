import React from "react";
import TweetActions from "./TweetActions";
import styled from "styled-components";

const SmallTweet = ({tweet}) => {
  console.log(tweet);

               // author={tweetsById.author}
                // isLiked={tweetsById.isLiked}
                // isRetweeted={tweetsById.isRetweeted}
                // media={tweetsById.media}
                // numLikes={tweetsById.numLikes}
                // numRetweets={tweetsById.numRetweets}
                // tweetText={tweetsById.status}
                // timestamp={tweetsById.timestamp}


  return (
    <Wrapper>
      <TweetHeader>
        <img src={tweet.author.avatarSrc} style={{borderRadius: "50%"}} height="60px" width="60px" />
        <DisplayName>{tweet.author.displayName}</DisplayName>
        <Handle>@{tweet.author.handle} •</Handle>
        <Timestamp>{tweet.timestamp}</Timestamp>
      </TweetHeader>  
      <TweetActionWrapper>
          <TweetActions />
      </TweetActionWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  border: 1px solid black;
  height: 300px;
  padding: 10px;
`;

const TweetHeader = styled.div` 
  display: flex;
  justify-content: flex-start;
`;

const DisplayName = styled.p` 
  font-size: 16px;
  font-weight: 600;
  padding-left: 10px;
`;

const Handle = styled.p` 
  font-size: 14px;
  color: gray;
  padding: 4px 0px 0px 5px;
`;

const Timestamp = styled.p` 
  font-size: 14px;
  color: gray;
  padding: 4px 0px 0px 5px;
`

const TweetActionWrapper = styled.div` 
  justify-content: space-evenly;
`;


export default SmallTweet;
