import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";
import { Link } from "react-router-dom";
import FollowingUser from "./FollowingUser";

const FollowingPage = () => {
  const [following, setFollowing] = useState();

  const { profileId } = useParams();

  useEffect(() => {
    fetch(`/api/${profileId}/following`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      setFollowing(data.following);
      console.log(data);
    })
  }, []);

  const showFollowing = () => {
    console.log("show following");
    <Link to={`${profileId}/following`} />
  }

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
            <Follow onClick={showFollowing}>
              Following
            </Follow>
          </FollowContainer>
        </Container>
        {following && following.map((followingUser) => {
        return (
          <div>
            <FollowingUser followingUser={followingUser} />
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

export default FollowingPage;
