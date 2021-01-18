import React, { useContext } from "react";
import TweetActions from "./TweetActions";
import { CurrentUserContext } from "./CurrentUserContext"

const SmallTweet = () => {
  const {currentUser, status} = useContext(CurrentUserContext);

  return (
  <div>
    <Avatar />
    <Username>{currentUser}</Username>
    <Handle></Handle>
    <TweetContent></TweetContent>
    <TweetActions />
  </div>
  )
}

export default SmallTweet;
