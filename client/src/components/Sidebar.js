import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

const Sidebar = () => {
  return (
    <Container>
      <GlobalStyles />
      <Logo />
        <h3><NavigationLink to="/" style={{color: "black", textDecoration: "none"}}>Home</NavigationLink></h3>
        <h3><NavLink to="/:profileId" style={{color: "black", textDecoration: "none"}}>Profile</NavLink></h3>
        <h3><NavLink to="/notifications" style={{color: "black", textDecoration: "none"}}>Notifications</NavLink></h3>
        <h3><NavLink to="/bookmarks" style={{color: "black", textDecoration: "none"}}>Bookmarks</NavLink></h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  margin-left: 10%;
  height: 300px;
`;

const NavigationLink = styled(NavLink)` 
  color: blue;

  &.active {
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
