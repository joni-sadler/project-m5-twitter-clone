import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import TweetActions from "./TweetActions";

const BigTweet = ({selectedTweet}) => {
  const {currentUser, status} = useContext(CurrentUserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedTweet) {
        setLoading(false);
    }
  }, [selectedTweet]);
  
  if (loading) {
      return (
          <div>Loading</div>
      )
  }

  console.log(selectedTweet);

  return (
    <Wrapper>
      {/* <TweetContainer> */}
      <TweetDiv>
        <TweetHeader>
        <img src={selectedTweet.tweet.author.avatarSrc} style={{borderRadius: "50%"}} height="60px" width="60px" />
          <NameDiv>

          
            <DisplayName>{selectedTweet.tweet.author.displayName}</DisplayName>
            <Handle>@{selectedTweet.tweet.author.handle}</Handle>
          </NameDiv>
        </TweetHeader>
        <TweetContent>{selectedTweet.tweet.status}</TweetContent>
        {selectedTweet.tweet.media.length > 0 && <img src={selectedTweet.tweet.media[0].url} style={{borderRadius: "15px"}} height="auto" width="100%"  /> }
        <TimeStamp>{selectedTweet.tweet.timestamp}</TimeStamp>
      </TweetDiv>
      {/* </TweetContainer> */}
      <TweetActionWrapper>
        <TweetActions />
      </TweetActionWrapper>

    </Wrapper>
  )
}

// return (
//   // <Wrapper>
//   //   <TweetContainer onClick={triggerBigTweet}>
//     // <img src={tweet.author.avatarSrc} style={{borderRadius: "50%"}} height="60px" width="60px" />
//       // <TweetDiv>
//         // <TweetHeader>
//           {tweet.isRetweeted === true && <Retweeted>Is retweeted</Retweeted>}
//           <DisplayName>{tweet.author.displayName}</DisplayName>
//           <Handle>@{tweet.author.handle} •</Handle>
//           <Timestamp>{tweet.timestamp}</Timestamp>
//         // </TweetHeader>
//         <TweetContent>{tweet.status}</TweetContent>
//         {tweet.media.length > 0 && <img src={tweet.media[0].url} style={{borderRadius: "15px"}} height="auto" width="100%"  /> }
//       // </TweetDiv>
//   //   </TweetContainer>        
//   //   <TweetActionWrapper>
//   //       <TweetActions tweet={tweet}/>
//   //   </TweetActionWrapper>
//   // </Wrapper>
// )


const Wrapper = styled.div` 
   width: 900%;
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

const DisplayName = styled.p` 
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
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
