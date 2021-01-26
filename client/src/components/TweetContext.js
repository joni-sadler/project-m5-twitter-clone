import React, { useState, useEffect } from "react";
import SpinnerComponent from "./SpinnerComponent";
import {Icon} from "react-icons-kit";
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

export const TweetContext = React.createContext(null);

export const TweetProvider = ({children}) => {
  const [tweets, setTweets] = useState({tweetIds: []});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(tweets)

  const refreshFeed = () => {
    fetch('/api/me/home-feed', {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      setTweets(data);
    })
    .catch(err => {
      console.log("An error has occurred.");
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    refreshFeed();
  }, []);


  return (
    <TweetContext.Provider value={{ tweets, setTweets, loading, setLoading, error, refreshFeed }}>
        {children}
    </TweetContext.Provider>
  );    
};
