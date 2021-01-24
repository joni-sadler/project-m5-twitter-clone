import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { MessageCircle, Repeat, Heart, Upload } from "react-feather";

const TweetActions = ({tweet}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const likeAction = () => {
    if (!isLiked) {
      setIsLiked(true);
      console.log("tweet is liked");
    } else {
      setIsLiked(false)
      console.log("tweet is unliked");
    }
  }

  const retweetAction = () => {
    if (!isRetweeted) {
      setIsRetweeted(true);
      console.log("tweet is retweeted");
    } else {
      setIsRetweeted(false);
      console.log("retweet has been undone");
    }

  }

//   const scale = keyframes`
//   0% {
//     transform: scale(0);
//   }
//   100% {
//       transform: scale(1);
//   }
// `;

// const fade = keyframes`
//   0% {
//       opacity: 0%;
//   }
//   50% {
//       opacity: 50%;
//   }
//   100% {
//       opacity: 100%;
//   }
// `;

  return (
    <Wrapper>

      <ItemContainer>
        <MessageCircle height="20px" color="gray" />
      </ItemContainer>

      <ItemContainer onClick={retweetAction}>
        <Repeat height="20px" color="gray" />
        {isRetweeted && <Counter>1</Counter>}
      </ItemContainer>


        <ItemContainer onClick={likeAction}>
          <Heart height="20px" color="gray" />
          {isLiked && <Counter>1</Counter>}
        </ItemContainer>

        <ItemContainer>
        <Upload height="20px" color="gray" />
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


// const Circle = styled.div` 
//     animation: ${scale} 300ms forwards, ${fade} 500ms ease-out forwards;
//     z-index: 0;
//     position: absolute;
//     border-radius: 50%;
// `;

export default TweetActions;
