import React, { useState, useEffect } from "react";

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
