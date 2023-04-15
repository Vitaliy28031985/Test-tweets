import { useState, useEffect } from "react";
import s from "./CardEl.module.css";
import picture1 from "../../assets/picture1.png";
import logo from "../../assets/Logo.png";

function CardEl({ tweet }) {
  const [changeButton, setChangeButton] = useState(() => {
    return JSON.parse(window.localStorage.getItem("changeButton")) ?? true;
  });

  useEffect(() => {
    window.localStorage.setItem("changeButton", JSON.stringify(changeButton));
  }, [changeButton]);

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
      {changeButton ? (
        <button
          onClick={() => setChangeButton(false)}
          className={s.buttonFollow}
        >
          Follow
        </button>
      ) : (
        <button
          onClick={() => setChangeButton(true)}
          className={s.buttonFollowing}
        >
          Following
        </button>
      )}
    </li>
  );
}

export default CardEl;
