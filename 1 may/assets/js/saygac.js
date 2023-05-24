// setTimeout(()=> {
//     console.log("neceyem?");
// },2000)

const btnstart = document.querySelector(".btnstart");
// console.log(btnstart);
const btnstop = document.querySelector(".btnstop");
const btnreset = document.querySelector(".btnreset");
const saniye = document.querySelector(".saniye");
const deqiqe = document.querySelector(".deqiqe");

let num = 0;

btnstart.addEventListener("click", function () {
  setInterval(() => {
    num++;
    let res = cevir(num);
    deqiqe.innerText;
  }, 100);
});

function cevir(san) {
  let deq = parseInt(san / 60);
  let san = parseInt(san % 60);
  return `${deq}:${san}`;
}
