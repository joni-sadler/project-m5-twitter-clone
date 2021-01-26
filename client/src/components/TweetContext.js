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

  useEffect(() => {
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
  }, []);

  // useEffect(() => {
  //   if (tweets) {
  //       setLoading(false);
  //   }
  // }, [tweets]);
  
  // if (loading) {
  //     return (
  //         <SpinnerComponent />
  //     )
  // }

  // if (error) {
  //   return (
  //     <div>
  //       <Icon size={60} icon={bomb} />
  //       <h2>An unknown error has occured.</h2>
  //       <h4>Please try refreshing the page.</h4>
  //     </div>
  //   )
  // }


  return (
    <TweetContext.Provider value={{ tweets, setTweets, loading, setLoading, error }}>
        {children}
    </TweetContext.Provider>
  );    
};
