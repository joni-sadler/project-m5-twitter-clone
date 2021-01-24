import React from "react";
import styled from "styled-components";

const FollowingComponent = ({followingUser}) => {
  return (
    <Wrapper>
      <User>
        <img src={followingUser.avatarSrc} style={{borderRadius: "50%"}} height="50px" width="50px" />
        <TextContainer>
          <UserName>{followingUser.displayName}</UserName>
          <Handle>@{followingUser.handle}</Handle>
        </TextContainer>
      </User>
    </Wrapper>

  )
}

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
`;

const User = styled.div` 
  display: flex;
  padding: 10px;
  border-top: 1px solid lightgray;
`;

const TextContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5px;
`;

const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
`;

const Handle = styled.p`
  font-size: 14px;
  color: gray;
  margin-top: 5px;
`;

export default FollowingComponent;