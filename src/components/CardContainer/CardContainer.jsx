import { useState, useEffect } from "react";
import CardEl from "../CardEl/CardEl";
import { helpers } from '../../helpers/helpers';
import fetchUsers from '../../API/fetchUsers'

import s from "./CardContainer.module.css";
function CardContainer() {
  const [tweets, setTweets] = useState([]);
  const [countPage, setCountPage] = useState(1);

useEffect(() => {
  fetchUsers(countPage, setTweets);
}, [countPage]);

  return (
    <section>
      <ul className={s.cardList}>
        {tweets.map((tweet) => (
          <CardEl key={tweet.id} tweet={tweet} />
        ))}
      </ul>
      <button onClick={() => {helpers.counterIncrement(setCountPage);}} type="button" className={s.button}>Load More</button>
    </section>
  );
}

export default CardContainer;
