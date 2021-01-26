import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TweetActions from "./TweetActions";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";
import SpinnerComponent from "./SpinnerComponent";

const BigTweet = ({selectedTweet}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedTweet) {
      setLoading(false);
    }
  }, [selectedTweet]);
  
  if (loading) {
    return (
      <SpinnerComponent />
    )
  }

  let formattedDate;

  const tweetDate = () => {
    formattedDate = format(new Date(selectedTweet.tweet.timestamp), 'p  •  MMM dd yyyy');
    console.log(formattedDate);
  }
  
  tweetDate();

  return (
    <Wrapper>
      <TweetDiv>
        <TweetHeader>
        {selectedTweet.isRetweeted === true && <Retweeted>Is retweeted</Retweeted>}  
        <img src={selectedTweet.tweet.author.avatarSrc} style={{borderRadius: "50%"}} height="60px" width="60px" />
          <NameDiv>
          <NavigationLink to={`/${selectedTweet.tweet.author.handle}`} >
            {selectedTweet.tweet.author.displayName}
          </NavigationLink>
            <Handle>@{selectedTweet.tweet.author.handle}</Handle>
          </NameDiv>
        </TweetHeader>
        <TweetContent>{selectedTweet.tweet.status}</TweetContent>
        {selectedTweet.tweet.media.length > 0 && <img src={selectedTweet.tweet.media[0].url} style={{borderRadius: "15px"}} height="auto" width="100%"  /> }
        <TimeStamp>{formattedDate}</TimeStamp>
      </TweetDiv>
      <TweetActionWrapper>
        <TweetActions />
      </TweetActionWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div` 
   width: 90%;
   height: auto;
   display: flex;
   flex-direction: column;
   padding: 5px;
   border: 1px solid lightgray;
`;

const TweetDiv = styled.div` 
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding-left: 10px;
`;

const TweetHeader = styled.div` 
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const NameDiv = styled.div` 
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const NavigationLink = styled(NavLink)` 
  font-size: "18px"; 
  text-decoration: "none";
  color: "black";
  font-weight: "600";
`;

const Retweeted = styled.p` 
  font-size: 14px;
  color: gray;
  padding: 4px 0px 0px 5px;
`;

const Handle = styled.p` 
  font-size: 14px;
  color: gray;
  margin: 0px;
`;

const TweetContent = styled.p` 
  font-size: 18px;
  margin-top: 0px;
`;

const TimeStamp = styled.p` 
  font-size: 14px;
  color: gray;
  padding: 4px 0px 0px 5px;
`;

const TweetActionWrapper = styled.div` 
  justify-content: space-evenly;
  padding-top: 10px;
  border-top: 1px solid lightgray;
`;

export default BigTweet;
