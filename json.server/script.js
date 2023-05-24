const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch("  http://localhost:3000/Bazar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      // your expected POST request payload goes here
      id: ,
      body: "My post content.",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // enter you logic when the fetch is successful
      console.log(data);
    })
    .catch((error) => {
      // enter your logic for when there is an error (ex. error toast)
      console.log(error);
    });
});