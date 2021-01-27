import React, { useEffect, useState } from "react";
import BigTweet from "./BigTweet";
import { useParams } from "react-router-dom";
import Bomb from "./Bomb";

const TweetDetails = () => {
    const [selectedTweet, setSelectedTweet] = useState();
    const [error, setError] = useState(null);

    const { tweetId } = useParams();

    useEffect(() => {
        fetch(`/api/tweet/${tweetId}`, {
          method: "GET",
        })
        .then(res => res.json())
        .then(data => {
          setSelectedTweet(data);
        })
        .catch(err => {
          console.log("TweetId: An error has occurred.");
          setError(err);
        })
      }, []);

      if (error) {
        return <Bomb />
      }

  return (
    <BigTweet selectedTweet={selectedTweet}/>
  )
}

export default TweetDetails;
