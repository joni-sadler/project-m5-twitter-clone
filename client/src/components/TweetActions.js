import React, { useContext } from "react";
import styled from "styled-components";
import { MessageCircle, Repeat, Heart, Upload } from "react-feather";

const TweetActions = ({tweet}) => {

  return (
    <Wrapper>

      <ItemContainer>
        <MessageCircle height="20px" color="gray" />
      </ItemContainer>

      <ItemContainer>
        <Repeat height="20px" color="gray" />
        {/* {tweet.numRetweets > 0 && <p>{tweet.numRetweets}</p>} */}
      </ItemContainer>


        <ItemContainer>
          <Heart height="20px" color="gray" />
          {/* {tweet.numLikes > 0 && <p>{tweet.numLikes}</p>} */}
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
  width: 50px;
`;

export default TweetActions;
