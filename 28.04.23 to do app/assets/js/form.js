const addd = document.querySelector(".addd");
const inputtext = document.querySelector(".inputtext");
const btn = document.querySelector(".btn");
const newdiv = document.querySelector(".newdiv");

addd.addEventListener("submit", function (e) {
  e.preventDefault();

  const el = document.createElement("div");
  el.classList.add("task");

  const task1_in = document.createElement("div");
  task1_in.classList.add("task1_in");

  const btn1 = document.createElement("button");
  btn1.classList.add("btn1");

  el.appendChild(task1_in)
  el.appendChild(btn1)


  newdiv.append(inputtext.value);
});
