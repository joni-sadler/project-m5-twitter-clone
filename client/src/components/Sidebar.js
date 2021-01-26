import React, { useContext } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import { Home, User, Bell, Bookmark } from "react-feather";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Wrapper>
      <GlobalStyles />
      <Logo width={"50px"} />

        <SidebarContainer>
          <Home style={{marginRight: "30px"}}/>
            <NavigationLink exact to="/">Home</NavigationLink>
        </SidebarContainer>

        <SidebarContainer>
          <User style={{marginRight: "30px"}}/>
            <NavigationLink to={`/${currentUser.profile.handle}`}>Profile</NavigationLink>
        </SidebarContainer>

        <SidebarContainer>
          <Bell  style={{marginRight: "30px"}}/>
            <NavigationLink to="/notifications">Notifications</NavigationLink>
        </SidebarContainer>

        <SidebarContainer>
          <Bookmark style={{marginRight: "30px"}}/>
            <NavigationLink to="/bookmarks">Bookmarks</NavigationLink>
        </SidebarContainer>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  margin: 0% 5% 0% 10%;
  height: 300px;
  width: 200px;
`;

const SidebarContainer = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
    &:active {
        background-color: rgba(148,0,211, 0.2);
        color: ${COLORS.primary};
        border-radius: 20px;
    }
`;

const NavigationLink = styled(NavLink)` 
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  padding: 10px 0px;
  &:active {
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
