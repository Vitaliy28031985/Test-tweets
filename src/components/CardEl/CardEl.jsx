import { useState } from "react";
import s from "./CardEl.module.css";
import picture1 from "../../assets/picture1.png";
import logo from "../../assets/Logo.png";

function CardEl() {
   const [changeButton, setChangeButton] = useState(false);
  return (
    <li className={s.CardContainer}>
      <div className={s.cardLogo}>
        <img src={logo} />
      </div>
      <div className={s.CardMinPicture}>
        <img src={picture1} alt="" width="308" />
      </div>
      <div className={s.containerAvatar}>
        <img
          className={s.avatar}
          src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
        />
      </div>
      <div className={s.textContainer}>
        <p className={s.text}>777 tweets</p>
        <p>100,500 Followers</p>
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
