const sec = document.querySelector("section");
const txt_inpt = document.querySelector(".txt_inpt");
const btn = document.querySelector(".btn");
const ul_list = document.querySelector("ul");
sec.appendChild(ul_list);

let arr = [];

// const result = arr.filter((e) => {
//   return e[0] === "A";
// });
// console.log(result);

function yaz(names) {
  ul_list.innerHTML = "";
  for (let i = 0; i < names.length; i++) {
    //   console.log();
    const li_list = document.createElement("li");
    li_list.innerText = names[i];
    ul_list.appendChild(li_list);
  }
}
yaz(arr);

txt_inpt.addEventListener("keyup", function () {
  const result = arr.filter((e) => {
    return e.toLowerCase().startsWith(txt_inpt.value.toLowerCase());
  });
  console.log(result);
  // const li_list = document.createElement("li");
  yaz(result);
});

fetch("https://northwind.vercel.app/api/customers")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((e) => {
      arr.push(e.companyName);
    });

    yaz(arr);
    // console.log(arr);
  })
  .catch((err) => console.log(err));
