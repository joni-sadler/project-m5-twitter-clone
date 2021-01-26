import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MessageCircle, Repeat, Heart, Upload } from "react-feather";

const TweetActions = ({tweet}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  
  const {tweetId} = useParams();

  const toggleLike = () => {
    fetch(`/api/tweet/${tweetId}/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ like: !isLiked})
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      if (!isLiked) {
        setIsLiked(true);
        console.log("tweet is liked");
      } else {
        setIsLiked(false)
        console.log("tweet is unliked");
      }
    })
  }

  const toggleRetweet = () => {
    fetch(`/api/tweet/${tweetId}/retweet`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ retweet: !isRetweeted})
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      if (!isRetweeted) {
        setIsRetweeted(true);
        console.log("tweet is retweeted");
      } else {
        setIsRetweeted(false)
        console.log("tweet is not retweeted");
      }
    })
  }


  return (
    <Wrapper>

      <ItemContainer>
        <MessageCircle height="20px" color="gray" tabIndex="0" aria-label="Reply to tweet" />
      </ItemContainer>

      <ItemContainer onClick={toggleRetweet}>
        <Repeat height="20px" color="gray" tabIndex="0" aria-label="Retweet" />
        {isRetweeted && <Counter>1</Counter>}
      </ItemContainer>


        <ItemContainer onClick={toggleLike}>
          <Heart height="20px" color="gray" tabIndex="0" aria-label="Like tweet" />
          {isLiked && <Counter>1</Counter>}
        </ItemContainer>

        <ItemContainer>
        <Upload height="20px" color="gray" tabIndex="0" aria-label="Save tweet" />
        </ItemContainer>

    </Wrapper>
  )
}

const Wrapper = styled.div` 
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 10px;
`;

const ItemContainer = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 50px;
  height: 15px;
`;

const Counter = styled.p` 
  font-size: 16px;
  margin: 0px;
`;


export default TweetActions;
