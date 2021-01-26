import React, { useState, useEffect } from "react";
import SpinnerComponent from "./SpinnerComponent";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({children}) => {
  const [tweets, setTweets] = useState({tweetIds: []});
  const [loading, setLoading] = useState(true);

  console.log(tweets)

  useEffect(() => {
    fetch('/api/me/home-feed', {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      setTweets(data)
    })
  }, []);


  useEffect(() => {
    if (tweets) {
        setLoading(false);
    }
  }, [tweets]);
  
  if (loading) {
      return (
          <SpinnerComponent />
      )
  }


  return (
    <TweetContext.Provider value={{ tweets, setTweets, loading, setLoading }}>
        {children}
    </TweetContext.Provider>
  );    
};
