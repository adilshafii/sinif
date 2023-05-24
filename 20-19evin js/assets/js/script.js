const create_account = document.querySelector(".create_account");
const name = document.querySelector(".name input");
const email = document.querySelector(".email input");
const one = document.querySelector(".passwords.one > input");
const two = document.querySelector(".passwords.two > input");
const formcst = document.querySelector(".formcst");
const inputname = document.querySelector(".inputname");
const inputmail = document.querySelector(".inputmail");
const phonekod = document.querySelector("#phonekod");
// console.log(formcst);

// create_account.addEventListener("submit", function (e) {
//     e.preventDefault();
//   console.log(name.value);
//   console.log(email.value);
//   name.value = "";
//   email.value = "";
// });

// one.addEventListener("keyup", function (e) {
//   two.value = one.value;
// });

let arr = [];
formcst.addEventListener("submit", function (e) {
  let obj = {
    name: "",
    email: "",
    phone: "",
    jobtype: "",
    password: "",
    repeatpasword: "",
  };
  obj.name = inputname.value;
  obj.email = inputmail.value;
  obj.phone = phonekod.value;
  console.log(obj);
  e.preventDefault();
});
