import React from "react";
import TweetActions from "./TweetActions";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";

const SmallTweet = ({tweet}) => {

  let formattedDate;

  const tweetDate = () => {
    formattedDate = format(new Date(tweet.timestamp), 'MMM dd');
  }
  
  tweetDate();

  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  }

  const handleKeyPressToBigTweet = (event) => {
    if (event.key === 'Enter') {
      return (
        <NavigationLink to={`/tweet/${tweet.id}`} />
      )
    }
  }


  return (
    <Wrapper>
     <NavigationLink 
       to={`/tweet/${tweet.id}`} 
       tabIndex="0" 
       onClick={handleClick} 
       aria-label="View tweet"
       onKeyDown={handleKeyPressToBigTweet}
      >
      <TweetContainer>
      <img src={tweet.author.avatarSrc} style={{borderRadius: "50%"}} height="60px" width="60px" />
        <TweetDiv>
          <TweetHeader>
            <DisplayName>
              <NavigationLink 
                to={`/${tweet.author.handle}`} 
                tabIndex="0" 
                style={{fontSize: "16px", textDecoration: "none", color: "black"}}
                >
                {tweet.author.displayName}
              </NavigationLink>
            </DisplayName>
            <Handle>@{tweet.author.handle} •</Handle>
            <Timestamp>{formattedDate}</Timestamp>
          </TweetHeader>
          {/* <NavigationLink to={`/tweet/${tweet.id}`}> */}
          <TweetContent>{tweet.status}</TweetContent>
          {tweet.media.length > 0 && <img src={tweet.media[0].url} style={{borderRadius: "15px"}} height="auto" width="100%"  /> }
          {/* </NavigationLink> */}
        </TweetDiv>
      </TweetContainer>        
      <TweetActionWrapper>
          <TweetActions tweet={tweet}/>
      </TweetActionWrapper>
      </NavigationLink>
    </Wrapper>

  )
};

const NavigationLink = styled(NavLink)` 
  text-decoration: none;
  color: black;
  /* &:active {
    border: 1px solid blue; */
  }
`;

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  border-bottom: 1px solid lightgray;
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
  padding-left: 10px;
`;

const TweetHeader = styled.div` 
  display: flex;
  flex-direction: row;
`;

// const Retweeted = styled.p` 
//   font-size: 14px;
//   color: gray;
//   padding: 4px 0px 0px 5px;
// `;

const DisplayName = styled.p` 
  font-size: 16px;
  font-weight: 600;
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
  margin-top: 0px;
`;

const TweetMedia = styled.div` 
  display: flex;
`;

const TweetActionWrapper = styled.div` 
  justify-content: space-evenly;
  padding-top: 10px;
`;


export default SmallTweet;
