export default function fetchUpdate(tweet, id) {
  fetch(`https://643a57f7bd3623f1b9b151b6.mockapi.io/users/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(tweet),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // Do something with updated task
    })
    .catch((error) => {
      return Promise.reject(new Error("Nothing was found for your request"));
    });
}