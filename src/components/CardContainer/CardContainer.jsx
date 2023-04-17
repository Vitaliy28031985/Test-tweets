import { useState, useEffect } from "react";
import CardEl from "../CardEl/CardEl";
import { helpers } from '../../helpers/helpers';
import fetchUsers from '../../API/fetchUsers';
import fetchUpdate from '../../API/fetchUpdate';

import s from "./CardContainer.module.css";

function CardContainer() {
  const [tweets, setTweets] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [change, setChange] = useState(true);

useEffect(() => {
  fetchUsers(countPage, setTweets);
}, [change, countPage]);

   const follow = (id) => {
     const tweetsId = tweets.find((item) => item.id === id);

     fetchUpdate(
       {
         ...tweetsId,
         change: true,
         followers: tweetsId.followers + 1,
       },
       tweetsId.id
     );
     helpers.handleToggle(setChange);
   };
  
    const following = (id) => {
  
      const tweetsId = tweets.find((item) => item.id === id);

       fetchUpdate({
         ...tweetsId,
         change: false,
         followers: (tweetsId.followers - 1),
       }, tweetsId
         .id);
      helpers.handleToggle(setChange);
    };
  
  return (
    <section>
      <ul className={s.cardList}>
        {tweets.map((tweet) => (
          <CardEl
            key={tweet.id}
            tweet={tweet}
            follow={follow}
            following={following}
          />
        ))}
      </ul>
      <button
        onClick={() => {
          helpers.counterIncrement(setCountPage, countPage);
        }}
        type="button"
        className={s.button}
      >
        Load More
      </button>
    </section>
  );
}

export default CardContainer;
