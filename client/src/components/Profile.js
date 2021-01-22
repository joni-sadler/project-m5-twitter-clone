import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../constants";
import { MapPin, Calendar } from "react-feather";
import styled from "styled-components";

const Profile = () => {
  const {currentUser, status} = useContext(CurrentUserContext);

  // let {handle} = useParams();

  // useEffect(() => {
  //   fetch(`/api/${handle}/profile`, {
  //     method: "GET",
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // });

  console.log(currentUser);

  return (
    <Wrapper>
      <img src={currentUser.profile.bannerSrc} height="auto" width="100%" />
      <HeaderContainer>
        <img src={currentUser.profile.avatarSrc} 
          style={{
            borderRadius: "50%",
            border: "3px solid white",
            position: "absolute",
            zIndex: "1",    
            top: "19%",
            left: "36%",   
            height: "140px",
            width: "140px",     
          }} />
          <EditButton>
            <EditText>Edit profile</EditText>
          </EditButton>
      </HeaderContainer>
      <InformationContainer>
        <DisplayName>{currentUser.profile.displayName}</DisplayName>
        <Handle>@{currentUser.profile.handle}</Handle>
        <Bio>{currentUser.profile.bio}</Bio>
        <LocationDateContainer>
          <MapContainer>
            <MapPin style={{color: "gray", height: "16px", paddingTop: "15px"}}/>
            <Location>{currentUser.profile.location}</Location>
          </MapContainer>
          <CalendarContainer>
            <Calendar style={{color: "gray", height: "16px", paddingTop: "15px"}}/>
            <JoinedDate>{currentUser.profile.joined}</JoinedDate>
          </CalendarContainer>
        </LocationDateContainer>
        <FollowContainer>
          <Follow>{currentUser.profile.numFollowing} Following</Follow>
          <Follow>{currentUser.profile.numFollowers} Followers</Follow>
        </FollowContainer>
        <TweetsMediaLikesContainer>
          <TweetsMediaLikes>Tweets</TweetsMediaLikes>
          <TweetsMediaLikes>Media</TweetsMediaLikes>
          <TweetsMediaLikes>Likes</TweetsMediaLikes>
        </TweetsMediaLikesContainer>
      </InformationContainer>
    </Wrapper>
  )
};

const Wrapper = styled.div` 
  width: 650px;
  height: 525px;
  border: 1px solid lightgray;
  z-index: 0;
`;

const HeaderContainer = styled.div` 
  display: flex;
  justify-content: flex-end;
  width: 650px;
  height: auto;
`;

const EditButton = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  border: 1px solid ${COLORS.primary};
  border-radius: 20px;
  margin: 10px 10px 0px 0px;
`;

const EditText = styled.p` 
  font-size: 18px;
  font-weight: 700;
  color: ${COLORS.primary};
`;

const InformationContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
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

const Bio = styled.p` 
  font-size: 15px;
  margin: 0px;
`;

const LocationDateContainer = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 320px;
`;

const MapContainer = styled.div` 
  display: flex;
`;

const CalendarContainer = styled.div` 
  display: flex;
`;

const Location = styled.p` 
  font-size: 15px;
  color: gray;
  padding-left: 5px;
`;

const JoinedDate = styled.p` 
  font-size: 15px;
  color: gray;
`;

const FollowContainer = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding-left: 5px;
`;

const Follow = styled.p` 
  font-size: 15px;
  color: gray;
  margin-top: 0px;
`;

const TweetsMediaLikesContainer = styled.div` 
  display: flex;
  justify-content: space-around;
`;

const TweetsMediaLikes = styled.p` 
  margin: 25px 0px 10px 0px;
  font-size: 15px;
  font-weight: 700;
  color: gray;
  &:active {
    color: ${COLORS.primary};
  }
`;

export default Profile;
