import React, {useContext, useState} from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { TweetContext } from "./TweetContext";
import { COLORS } from "../constants";
import styled from "styled-components";
import SpinnerComponent from "./SpinnerComponent";
import {Icon} from "react-icons-kit";
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

const ComposeTweet = () => {
  const {currentUser} = useContext(CurrentUserContext);
  const {refreshFeed} = useContext(TweetContext);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  if (!currentUser) {
    return (
      <SpinnerComponent />
    )
  }

  const recordTweet = () => {
    let tweetContents = document.querySelector("#tweetContent").value;

    if (remainingCharacters >= 0) {
      fetch('/api/tweet', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"status": tweetContents})
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)  
        refreshFeed();
      })
      .catch(err => {
        console.log("There was an error composing your tweet.");
        setError(err);
      })
     }
    }

  let remainingCharacters = 280 - count;

  if (error) {
    return (
      <div>
        <Icon size={60} icon={bomb} />
        <h2>Your attempt to post a tweet has failed.</h2>
        <h4>Please try refreshing the page.</h4>
      </div>
    )
  }

  return (
    <Wrapper>
      <img src={currentUser.profile.avatarSrc} style={{borderRadius: "50%"}} height="60px" width="60px" alt="avatar" />
      <TextInput>
        <textarea 
          type="text"
          placeholder="What's happening?"
          style={{
            width: "500px",
            height: "200px",
            border: "none",
        }} 
        id="tweetContent"
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
  border-bottom: 5px solid lightgray;
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
