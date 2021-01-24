import React, { useContext, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const ActionButton = ({selectedUser}) => {
  const {currentUser} = useContext(CurrentUserContext);

  const [isBeingFollowedByYou, setIsBeingFollowedByYou] = useState(selectedUser.profile.isBeingFollowedByYou);

  const { profileId } = useParams();  
  console.log(selectedUser);
  console.log(currentUser);
     

  const triggerFollow = () => {
    fetch(`/api/${profileId}/follow`, {
      method: "PUT",
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        setIsBeingFollowedByYou(true);
    })
  }

  const triggerUnfollow = () => {
    fetch(`/api/${profileId}/unfollow`, {
        method: "PUT",
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsBeingFollowedByYou(false);
      })
    }
  

  return (
    <Wrapper>
      {selectedUser.profile.handle === currentUser.profile.handle && 
        <ButtonText>Edit profile</ButtonText> 
      }

      {selectedUser.profile.handle !== currentUser.profile.handle && !isBeingFollowedByYou && 
        <ButtonText onClick={triggerFollow}>Follow</ButtonText> 
      }

      {selectedUser.profile.handle !== currentUser.profile.handle && isBeingFollowedByYou && 
        <ButtonText onClick={triggerUnfollow}>Unfollow</ButtonText> 
      }
    </Wrapper>
  )
}

const Wrapper = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  border: 1px solid ${COLORS.primary};
  border-radius: 20px;
  margin: 10px 10px 0px 0px;
`;

const ButtonText = styled.p` 
  font-size: 18px;
  font-weight: 700;
  color: ${COLORS.primary};
`;

export default ActionButton;
