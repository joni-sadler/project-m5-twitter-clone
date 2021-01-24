import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

const Following = () => {
  const {currentUser, setCurrentUser, status, setStatus} = useContext(CurrentUserContext);

  const { profileId } = useParams();

  console.log("profile id:", profileId);
  console.log(currentUser)

  useEffect(() => {
    fetch(`/api/${profileId}/following`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }, []);

  return (
    <Wrapper>
      <HeaderContainer>
         <DisplayName>{currentUser.profile.displayName}</DisplayName>
         <Handle>@{currentUser.profile.handle}</Handle>
       </HeaderContainer>
       <FollowContainer>
          <Follow>
              Followers
          </Follow>
          <Follow>
              Following
          </Follow>
       </FollowContainer>
    </Wrapper>  
  )
}

const Wrapper = styled.div` 
    display: flex;
    flex-direction: column;
    border: 2px solid lightgray;
    border-radius: 1px;
    width: 90%;
    height: auto;
`;

const HeaderContainer = styled.div` 
    display: flex;
    flex-direction: column;
    margin-left: 10px;

`;

const DisplayName = styled.p` 
  font-size: 20px;
  font-weight: 800;
  padding: 0px;
  margin-bottom: 0px;
`;

const Handle = styled.p` 
  font-size: 14px;
  color: gray;
  margin-top: 5px;
`;

const FollowContainer = styled.div` 
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid lightgray
`;

const Follow = styled.p` 
  font-size: 16px;
  font-weight: 600;
  color: gray;
`;

export default Following;
