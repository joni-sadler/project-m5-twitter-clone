import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import TweetActions from "./TweetActions";

const BigTweet = () => {
  const {currentUser, status} = useContext(CurrentUserContext);

  return (
    <div>
      <Avatar />
      <Username>{currentUser}</Username>
      <Handle></Handle>
      <TweetContent></TweetContent>
      <Timestamp></Timestamp>
      <TweetActions />
    </div>
  )
}


export default BigTweet;
