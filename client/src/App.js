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

const App = () => {
  const {currentUser, status} = useContext(CurrentUserContext);
  return (
    <CurrentUserProvider> 
      {(status === "loading") ? "The page is loading" :
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
          
            <Route exact path="/:profileId">
              <Profile />
            </Route>

          </Switch>
        </Wrapper>
      </BrowserRouter> 
    }
    </CurrentUserProvider>
  )
}


const Wrapper = styled.div`
  display: flex;
`

export default App;
