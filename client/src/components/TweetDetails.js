import React, { useEffect, useState } from "react";
import BigTweet from "./BigTweet";
import { useParams } from "react-router-dom";
import {Icon} from "react-icons-kit";
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

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
        return (
          <div>
            <Icon size={60} icon={bomb} />
            <h2>An unknown error loading this tweet has occured.</h2>
            <h4>Please try refreshing the page.</h4>
          </div>
        )
      }

  return (
    <BigTweet selectedTweet={selectedTweet}/>
  )
}

export default TweetDetails;
