import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import { Home, User, Bell, Bookmark } from "react-feather";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

const Sidebar = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Logo />

        <SidebarContainer>
          <Home style={{marginRight: "20px"}}/>
          <h3><NavigationLink to="/" style={{color: "black", textDecoration: "none"}}>Home</NavigationLink></h3>
        </SidebarContainer>

        <SidebarContainer>
          <User style={{marginRight: "20px"}}/>
          <h3><NavLink to="/:profileId" style={{color: "black", textDecoration: "none"}}>Profile</NavLink></h3>
        </SidebarContainer>

        <SidebarContainer>
          <Bell  style={{marginRight: "20px"}}/>
          <h3><NavLink to="/notifications" style={{color: "black", textDecoration: "none"}}>Notifications</NavLink></h3>
        </SidebarContainer>

        <SidebarContainer>
          <Bookmark style={{marginRight: "20px"}}/>
          <h3><NavLink to="/bookmarks" style={{color: "black", textDecoration: "none"}}>Bookmarks</NavLink></h3>
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
  height: 500px;
`;

const SidebarContainer = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
`

const NavigationLink = styled(NavLink)` 
  color: blue;

  &.active {
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
