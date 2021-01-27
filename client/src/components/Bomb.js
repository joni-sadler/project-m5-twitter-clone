import React from "react";
import {Icon} from "react-icons-kit";
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

const Bomb = () => {
  return (
    <div>
      <Icon size={60} icon={bomb} />
      <h2>An unknown error loading user context has occured.</h2>
      <h4>Please try refreshing the page.</h4>
    </div>
  )
}


export default Bomb;
