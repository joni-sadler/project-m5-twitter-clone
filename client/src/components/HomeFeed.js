import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SmallTweet from "./SmallTweet";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";

const HomeFeed = () => {

  const { tweets, setTweets, loading, setLoading } = useContext(TweetContext);

//   useEffect(() => {
//     if (!tweets) {
//         fetch('/api/me/home-feed', {
//             method: "GET",
//           })
//           .then(res => res.json())
//           .then(data => {
//             setTweets(data)
//           })
//     }
//   }, []);

//   useEffect(() => {
//     if (tweets) {
//         setLoading(false);
//     }
//   }, [tweets])

//   let {handle} = useParams();

//   useEffect(() => {
//     fetch(`/api/${handle}/feed`, {
//       method: "GET",
//     })
//     .then(res => res.json())
//     .then(data => {
//      console.log("Feed tweets")
//      console.log(data)
//     })
//   }, []);

//   console.log(tweets)
  
//   if (loading) {
//       return (
//           <div>Loading</div>
//       )
//   }

  return (
  <Wrapper>    
    {tweets.tweetIds.map((tweetId) => {
      const tweet = tweets.tweetsById[tweetId]
        return (
          <SmallTweet tweet={tweet} />
        )
    })}
  </Wrapper>
  )
};

const Wrapper = styled.div` 
  width: 700px;
`;

export default HomeFeed;
