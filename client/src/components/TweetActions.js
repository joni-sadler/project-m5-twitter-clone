import React from "react";
import styled from "styled-components";
import { MessageCircle, Repeat, Heart, Upload } from "react-feather";

const TweetActions = () => {

  return (
    <Wrapper>
        <MessageCircle height="20px" />
        <Repeat height="20px" />
        <Heart height="20px" />
        <Upload height="20px" />
    </Wrapper>
  )
}

const Wrapper = styled.div` 
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 10px;
`;

export default TweetActions;
