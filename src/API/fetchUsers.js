


export default function fetchUsers(page, state) {
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
      
      state((prevState) => [...prevState, ...tweetsUser]);
    })
    .catch((error) => {
      return Promise.reject(new Error("Nothing was found for your request"));
    });
}
