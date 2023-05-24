const removes = document.getElementById("removes");
console.log(removes);
const adds = document.getElementById("adds");
console.log(adds);
const counter = document.getElementById("counter");
console.log(counter);
removes.addEventListener("click", function () {
  let x = counter.innerText;
  x--;
  if (x >= 0) {
    counter.innerText--;
  }
});
adds.addEventListener("click", function () {
  counter.innerText++;
});
