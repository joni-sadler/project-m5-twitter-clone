import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const ActionButton = ({selectedUser, currentUser}) => {
  return (
    <Wrapper>
      {selectedUser.profile.handle === currentUser.profile.handle && <ButtonText>Edit profile</ButtonText> }
      {selectedUser.profile.handle !== currentUser.profile.handle && !selectedUser.profile.isBeingFollowedByYou && <ButtonText>Follow</ButtonText> }
      {selectedUser.profile.handle !== currentUser.profile.handle && selectedUser.profile.isBeingFollowedByYou && <ButtonText>Unfollow</ButtonText> }
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
