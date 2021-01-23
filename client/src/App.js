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

const App = () => {
  const {currentUser, status} = useContext(CurrentUserContext);
  return (
    <TweetProvider> 
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
          
            {/* view single tweet */}
            <Route exact path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
          
            {/* view user profile page */}
            <Route exact path="/:profileId">
              <Profile />
            </Route>

          </Switch>
        </Wrapper>
      </BrowserRouter> 
    }
    </CurrentUserProvider>
    </TweetProvider>
  )
}


const Wrapper = styled.div`
  display: flex;
`

export default App;
