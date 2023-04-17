import { useState, useEffect } from "react";
import s from "./CardEl.module.css";
import picture1 from "../../assets/picture1.png";
import logo from "../../assets/Logo.png";

function CardEl({ tweet, follow, following }) {

  return (
    <li className={s.CardContainer}>
      <div className={s.cardLogo}>
        <img src={logo} />
      </div>
      <div className={s.CardMinPicture}>
        <img src={picture1} alt="" width="308" />
      </div>
      <div className={s.containerAvatar}>
        <img className={s.avatar} src={tweet.avatar} />
      </div>
      <div className={s.textContainer}>
        <p className={s.text}>{tweet.tweets} tweets</p>
        <p>{tweet.followers} Followers</p>
      </div>
      {!tweet.change ? (
        <button onClick={() => follow(tweet.id)} className={s.buttonFollow}>
          Follow
        </button>
      ) : (
        <button
          onClick={() => following(tweet.id)}
          className={s.buttonFollowing}
        >
          Following
        </button>
      )}
    </li>
  );
}

export default CardEl;
