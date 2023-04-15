import { useState, useEffect } from "react";
import CardEl from "../CardEl/CardEl";


import s from "./CardContainer.module.css";
function CardContainer() {
  const [tweets, setTweets] = useState([]);

useEffect(() => {
 fetchUsers(4);
  
}, []);

 function fetchUsers(page) {
   const url = new URL("https://643a57f7bd3623f1b9b151b6.mockapi.io/users/");
   url.searchParams.append("completed", false);
   url.searchParams.append("page", page);
   url.searchParams.append("limit", 10);

   fetch(url)
     .then((res) => {
       if (res.ok) {
         return res.json();
       }

     })
     .then((tweetsUser) => {
       setTweets([...tweetsUser]);
     })
     .catch((error) => {
        return Promise.reject(new Error("Nothing was found for your request"));
     });
 }
 

  return (
    <section>
      <ul className={s.cardList}>
        {tweets.map((tweet) => (
          <CardEl key={tweet.id} tweet={tweet} />
        ))}

      </ul>
    </section>
  );
}

export default CardContainer;
