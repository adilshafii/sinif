const boddy = document.querySelector("body");
boddy.style.display = "flex";
boddy.style.justifyContent = "center";
boddy.style.alignItems = "center";
boddy.style.height = "100vh";
const bttn = document.querySelector("#btn");
bttn.onclick = function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};
