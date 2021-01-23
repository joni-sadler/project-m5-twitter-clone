import React, { useEffect, useContext, useState } from "react";
import BigTweet from "./BigTweet";
import { TweetContext } from "./TweetContext"
import { useParams } from "react-router-dom";

const TweetDetails = () => {
    // const { tweets, setTweets } = useContext(TweetContext);
    const [selectedTweet, setSelectedTweet] = useState();

    const { tweetId } = useParams();

    useEffect(() => {
        fetch(`/api/tweet/${tweetId}`, {
          method: "GET",
        })
        .then(res => res.json())
        .then(data => {
          setSelectedTweet(data);
        })
      }, []);

  return (
    <BigTweet selectedTweet={selectedTweet}/>
  )
}

export default TweetDetails;
