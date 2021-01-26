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


const App = () => {
  const {currentUser, status} = useContext(CurrentUserContext);
  return (
    <TweetProvider> 
      {(status === "loading") ? <SpinnerComponent /> :
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
          
            {/* view single tweet */}
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

            {/* view user profile page */}
            <Route exact path="/:profileId">
              <Profile />
            </Route>

            
            <Route>
              Missing route! Do you need to add a route in BrowserRouter in App.js?
            </Route>

          </Switch>
        </Wrapper>
      </BrowserRouter> 
    }
    </TweetProvider>
  )
}


const Wrapper = styled.div`
  display: flex;
`

export default App;
