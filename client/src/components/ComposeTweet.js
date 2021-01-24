import React, {useContext, useState} from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../constants";
import styled from "styled-components";

const ComposeTweet = () => {
  const {currentUser} = useContext(CurrentUserContext);
  const [tweetBody, setTweetBody] = useState();
  const [count, setCount] = useState(0);

  const recordTweet = () => {
    fetch('/api/tweet', {
      method: "POST",
      headers: {"Accept": "application/json"},
      body: JSON.stringify({"status": tweetBody})
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)  
    })
  }

  let remainingCharacters = 280 - count;

  return (
    <Wrapper>
      <img src={currentUser.profile.avatarSrc} style={{borderRadius: "50%"}} height="60px" width="60px" />
      <TextInput>
        <textarea 
          type="text"
          style={{
            width: "500px",
            height: "200px",
            border: "none",
        }} 
        onChange={event => setTweetBody(event.target.value)}
        onChange={event => setCount(event.target.value.length)}></textarea>
      </TextInput>
      <FooterDiv>
        {remainingCharacters > 55 && <CharacterCounter style={{color: "grey"}}>{remainingCharacters}</CharacterCounter>}
        {remainingCharacters < 55 && remainingCharacters > 0 && <CharacterCounter style={{color: "gold"}}>{remainingCharacters}</CharacterCounter>}
        {remainingCharacters < 0 && <CharacterCounter style={{color: "red"}}>{remainingCharacters}</CharacterCounter>}
        <MeowButton>
          <MeowText onClick={recordTweet}>Meow</MeowText>
        </MeowButton>
      </FooterDiv>  
    </Wrapper>
  )  
}

const Wrapper = styled.div` 
  display: flex;
  margin-top: 10%;
  padding: 10px;
  border: 1px solid lightgray;
  height: 200px;
`;

const TextInput = styled.div` 
  margin-left: 10px;
  height: 80%;
  width: 80%;
`;

const FooterDiv = styled.div` 
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const CharacterCounter = styled.div` 
  padding-bottom: 10px;
`;

const MeowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primary};
  border-radius: 20px;
  height: 40px;
  width: 90px;
  margin-left: 20px;
`;

const MeowText = styled.p` 
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export default ComposeTweet;
