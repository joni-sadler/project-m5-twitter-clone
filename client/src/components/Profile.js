import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../constants";
import { MapPin, Calendar } from "react-feather";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeFeed from "./HomeFeed";
import ActionButton from "./ActionButton";
import ComposeTweet from "./ComposeTweet";
import SpinnerComponent from "./SpinnerComponent";
import {Icon} from "react-icons-kit";
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

const Profile = () => {
  const {currentUser} = useContext(CurrentUserContext);
  const [selectedUser, setSelectedUser] = useState();
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    fetch(`/api/${profileId}/profile`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setSelectedUser(data);
      }
    })
    .catch(err => {
      console.log("Profile: An error has occurred.");
      setError(err);
    })
    .finally(() => {
      setStatus('idle');
    })
  }, []);

  if (status === "loading") {
    return <SpinnerComponent />
  }

  if (error) {
    return (
      <div>
        <Icon size={60} icon={bomb} />
        <h2>An unknown error loading profile data has occured.</h2>
        <h4>Please try refreshing the page.</h4>
      </div>
    )
  }

  return (
    <Wrapper>
      <img src={selectedUser.profile.bannerSrc} height="auto" width="100%" />
      <HeaderContainer>
        <img src={selectedUser.profile.avatarSrc} 
          style={{
            borderRadius: "50%",
            border: "3px solid white",
            position: "absolute",
            zIndex: "1",    
            top: "22%",
            left: "35%",   
            height: "140px",
            width: "140px",     
          }} />

        <ActionButton selectedUser={selectedUser} />
      </HeaderContainer>
      <InformationContainer>
        <DisplayName>{selectedUser.profile.displayName}</DisplayName>
        <Handle>@{selectedUser.profile.handle}</Handle>
        <Bio>{selectedUser.profile.bio}</Bio>
        <LocationDateContainer>
          <MapContainer>
            <MapPin style={{color: "gray", height: "16px", paddingTop: "15px"}}/>
            <Location>{selectedUser.profile.location}</Location>
          </MapContainer>
          <CalendarContainer>
            <Calendar style={{color: "gray", height: "16px", paddingTop: "15px"}}/>
            <JoinedDate>{selectedUser.profile.joined}</JoinedDate>
          </CalendarContainer>
        </LocationDateContainer>
        <FollowContainer>
          <NavigationLink to={`${selectedUser.profile.handle}/following`}>{selectedUser.profile.numFollowing} Following</NavigationLink>
          <NavigationLink to={`${selectedUser.profile.handle}/followers`}>{selectedUser.profile.numFollowers} Followers</NavigationLink>
        </FollowContainer>
      </InformationContainer>
      <TweetsMediaLikesContainer>
          <TweetsMediaLikes>
            <MenuItem>Tweets</MenuItem>
          </TweetsMediaLikes>
          <TweetsMediaLikes>
            <MenuItem>Media</MenuItem>
          </TweetsMediaLikes>
          <TweetsMediaLikes>
            <MenuItem>Likes</MenuItem>
          </TweetsMediaLikes>
        </TweetsMediaLikesContainer>
        {currentUser === selectedUser && <ComposeTweet />}
          <HomeFeed selected={selectedUser} />
    </Wrapper>
  )
};

const Wrapper = styled.div` 
  width: 750px;
  height: 100%;
  border: 1px solid lightgray;
  z-index: 0;
`;

const HeaderContainer = styled.div` 
  display: flex;
  justify-content: flex-end;
  width: 650px;
  height: auto;
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

const NavigationLink = styled(NavLink)` 
  font-size: 15px;
  color: gray;
  margin-top: 0px;
  text-decoration: none;
`;

const FollowContainer = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding-left: 5px;
`;

const TweetsMediaLikesContainer = styled.div` 
  display: flex;
  justify-content: space-around;
`;

const TweetsMediaLikes = styled.div` 
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  border-bottom: 2px solid gray;
  &:active {
    border-bottom: 2px solid ${COLORS.primary};
  }
`;

const MenuItem = styled.p` 
  align-items: center;
  padding-bottom: 5px;
  font-size: 15px;
  font-weight: 700;
  width: 200px;
  color: gray;
  &:active {
    color: ${COLORS.primary};
  }
`;

export default Profile;
