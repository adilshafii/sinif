const fon = document.getElementsByTagName("body");
fon[0].style.backgroundColor = "aqua";

const btn = document.getElementById("btn");
btn.style.fontSize = "17px";
btn.style.backgroundColor = "yellow";

const lst1 = document.getElementById("list1");
lst1.style.backgroundColor = "blue";
lst1.style.color = "white";
lst1.innerText = lst1.innerText + "Yeni soz";

const lst2 = document.getElementById("list2");
lst2.style.backgroundColor = "red";
lst2.style.color = "black";
lst2.innerText = lst2.innerText + "Yeni soz";

const lst3 = document.getElementById("list3");
lst3.style.backgroundColor = "green";
lst3.style.color = "yellow";
lst3.innerText = lst3.innerText + "Yeni soz";

const lst = document.getElementById("list");
// console.log(lst.children[0]);
// lst.children[0].style.fontSize = "30px";

const box = document.getElementById("box");
// console.log(box);

// --------------------------------------------------------------------/

const bttn1 = document.createElement("button");
bttn1.innerText = "Teze buton";
lst1.appendChild(bttn1);

const bttn2 = document.createElement("button");
bttn2.innerText = "Teze buton";
lst2.appendChild(bttn2);

const bttn3 = document.createElement("button");
bttn3.innerText = "Teze buton";
lst3.appendChild(bttn3);

const bttn4 = document.createElement("button");
bttn4.innerText = "Teze buton";
lst1.appendChild(bttn4);

const bttn5 = document.createElement("button");
bttn5.innerText = "Teze buton";
lst2.appendChild(bttn5);

const bttn6 = document.createElement("button");
bttn6.innerText = "Teze buton";
lst3.appendChild(bttn6);
