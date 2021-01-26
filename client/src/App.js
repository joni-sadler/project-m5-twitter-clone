import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { CurrentUserContext, CurrentUserProvider } from "./components/CurrentUserContext";
import { TweetProvider } from "./components/TweetContext";
import FollowingPage from "./components/FollowingPage";
import FollowerPage from "./components/FollowerPage";
import ActionButton from "./components/ActionButton";
import SpinnerComponent from "./components/SpinnerComponent";
import {Icon} from "react-icons-kit";
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';


const App = () => {
  const {currentUser, status, error} = useContext(CurrentUserContext);

  if (status === "loading") {
    return <SpinnerComponent />
  }

  if (error) {
    return (
      <div>
        <Icon size={60} icon={bomb} />
        <h2>An unknown error loading user context has occured.</h2>
        <h4>Please try refreshing the page.</h4>
        </div>
    )
  }

  return (
    <TweetProvider> 
      <BrowserRouter>
        <Wrapper>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
          
            <Route exact path="/notifications">
              <Notifications />
            </Route>
          
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
          
            <Route exact path="/tweet/:tweetId">
              <TweetDetails />
            </Route>

            <Route exact path="/:profileId/following">
              <FollowingPage />
            </Route>

            <Route exact path="/:profileId/followers">
              <FollowerPage />
            </Route>

            <Route exact path="/:profileId/follow">
              <ActionButton />
            </Route>

            <Route exact path="/:profileId/unfollow">
              <ActionButton />
            </Route>

            <Route exact path="/:profileId">
              <Profile />
            </Route>

            <Route>
              Missing route!
            </Route>

          </Switch>
        </Wrapper>
      </BrowserRouter> 
    
    </TweetProvider>
  )
}


const Wrapper = styled.div`
  display: flex;
`

export default App;
