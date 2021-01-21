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
      <TweetContainer>
      <img src={tweet.author.avatarSrc} style={{borderRadius: "50%"}} height="60px" width="60px" />
        <TweetDiv>
          <TweetHeader>
            <DisplayName>{tweet.author.displayName}</DisplayName>
            <Handle>@{tweet.author.handle} •</Handle>
            <Timestamp>{tweet.timestamp}</Timestamp>
          </TweetHeader>
          <TweetContent>{tweet.status}</TweetContent>
        </TweetDiv>
      </TweetContainer>  

      {tweet.media[1] > 0 && <img src={tweet.media[0]} /> }
      
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
  padding: 10px;
`;

const TweetContainer = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const TweetDiv = styled.div` 
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

const TweetHeader = styled.div` 
  display: flex;
  flex-direction: row;
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
`;

const TweetContent = styled.p` 
  font-size: 14px;
  padding-left: 10px;
  margin-top: 0px;
`;

{/* const TweetMedia = styled.div` 
  display: flex;
`; */}

const TweetActionWrapper = styled.div` 
  justify-content: space-evenly;
`;


export default SmallTweet;
