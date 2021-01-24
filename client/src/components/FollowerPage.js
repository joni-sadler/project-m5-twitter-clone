import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";
import FollowerUser from "./FollowerUser";

const FollowerPage = () => {
  const [followers, setFollowers] = useState();

  const { profileId } = useParams();

  useEffect(() => {
    console.log(profileId);
    fetch(`/api/${profileId}/followers`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      setFollowers(data.followers);
      console.log(data);
      console.log(followers);
    })
  }, []);

  // useEffect(() => {
  //   fetch(`/api/${profileId}/followers`, {
  //     method: "GET",
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  // }, []);


  return (
    <Wrapper>
      <HeaderContainer>
         <Handle>@{profileId}</Handle>
       </HeaderContainer>
       <Container>
         <FollowContainer>
            <Follow>
              Followers
            </Follow>
          </FollowContainer> 
          <FollowContainer>
            <Follow>
              Following
            </Follow>
          </FollowContainer>
        </Container>
        {followers && followers.map((followerUser) => {
        return (
          <div>
            <FollowerUser followerUser={followerUser} />
          </div>  
        )})
        } 

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

const Handle = styled.p` 
  font-size: 20px;
  font-weight: 800;
  padding: 0px;
  margin-bottom: 0px;
`;

const Container = styled.div` 
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FollowContainer = styled.div` 
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
  &:active {
    border-bottom: 2px solid ${COLORS.primary};
  }
`;

const Follow = styled.p` 
  font-size: 16px;
  font-weight: 600;
  color: gray;
  &:active {
    color: ${COLORS.primary};
  }
`;

export default FollowerPage;
