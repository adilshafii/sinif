("use strict");
// for(let i=256;i>1;i=i/2){
//     console.log("i =",i);
// }

// ---------------------------------------
// ---------------------------------------

// for (let i = 0; i <= 10; i++) {
//   if (i === 4) {
//     console.log("serte daxil oldu");
//     break;
//   }
//   console.log(i);
// }

// ---------------------------------------
// ---------------------------------------

// for (let i = 0; i <= 10; i++) {
//     if (i === 2 || i===7 || i===9) {
//       console.log("serte daxil oldu");
//       continue;
//     }
//     console.log(i);
//   }

// ---------------------------------------
// ---------------------------------------

// let a = 1;
// while (a < 100000) {
//   a *= 10;
//   if (a === 10 || a === 10000) {
//     // console.log("kecid");
//     continue;
//   }
//   console.log(a);
// }

// let a,b,c = +prompt(" Ucbucagin tereflerini daxil edin: ")

// ---------------------------------------
// ---------------------------------------
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a, b, c);
// // console.log(a + b > c && a - b < c,a + c > b && a - c < b,b + c > a && b - c < a);
// if (
//   (a + b > c && a - b < c) &&
//   (a + c > b && a - c < b) &&
//   (b + c > a && b - c < a)
// ) {
//   console.log("Ucbucaqdir!");
// } else {
//   console.log("Ucbucaq deyil!");
// }
// ---------------------------------------
// ---------------------------------------

// let a = 5;
// let b = 5;
// let c = 5;
// console.log(a, b, c);
// if(a==b && b==c){
//     console.log("Ucbucaq berabertereflidir!");
// } else{
//     console.log("Ucbucaq beraber terefli deyil!");
// }

// ---------------------------------------
// ---------------------------------------

// for(let i=1;i<99;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }

// ---------------------------------------
// ---------------------------------------

// for(let i=4;i<99;i+=10){
//     console.log(i);
// }

// ---------------------------------------
// ---------------------------------------

// for(let i=0;i<20;){
//     console.log(i);
// }

// ---------------------------------------
// ---------------------------------------

// for(let i=10;i<=99;i++){
//     if(i%11===0){
//         console.log(i);
//     }
// }

// ---------------------------------------
// ---------------------------------------

// for(let i=10;i<=99;i++){
//     if(i%11!==0){
//         console.log(i);
//     }
// }

// ---------------------------------------
// ---------------------------------------

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }

// ---------------------------------------
// ---------------------------------------

// let p=1;
// let n=3;
// for(let i=1;i<=n;i++){
//     p=i*p;
// }
// console.log(p);

// ---------------------------------------
// ---------------------------------------

// 0 1 1 2 3 5 8 13 21

// let n1=0,n2=1,next;
// let num=10;

// for(let i=1;i<=num;i++){
//     next=n2;
//     n2=n2+n1;
//     n1=next;
//     console.log(n1);
// }

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

// const arr=["Adil","Shafizada","Qedir"];
// console.log(arr);
// console.log("Arrayin uzunlugu:",arr.length);
// console.log(arr[arr.length-1]);

// ---------------------------------------
// ---------------------------------------

// const arr=["Adil","Shafizada","Qedir",17,27,"Yusif"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// ---------------------------------------
// ---------------------------------------

// let axtar=17;
// const arr=["Adil","Shafizada","Qedir",17,27,"Yusif"];
// for(let i=0;i<arr.length;i++){
//     if(axtar===arr[i]){
//         console.log(i);
//     }
// }

// ---------------------------------------
// ---------------------------------------

// const arr=[];
// let say=20;
// for(let i=0;i<=say;i+=2){
//     arr.push(i);
//     console.log(arr.push(i));
// }

// ---------------------------------------
// ---------------------------------------

// const arr=[];
// let say=5;
// for (let i = 0; i < say; i++) {
//     arr.push(prompt("deyer yaz"))

// }
// console.log(arr);

// ---------------------------------------
// ---------------------------------------

// YENI BIR GUN SEMINARI

// ---------------------------------------
// ---------------------------------------

// let eded = 543;
// let text = eded.toString();
// let result = "";
// for (let i = 0; i < text.length; i++) {
//   result = result + text[i] + "-";
// }
// result = result.substring(0, result.length - 1);

// console.log("Cavab: ", result);

// ---------------------------------------
// ---------------------------------------

// let eded = 358;
// let text = eded.toString();
// let max = text[0];
// for (let i = 0; i < text.length; i++){
//     if(max<text[i]){
//         max=text[i];
//     }
// }
// console.log(max);

// ---------------------------------------
// ---------------------------------------

// let text="Azerbaycan quclu dovletdir kisi kimidir ozde";
// console.log(text);
// let bosluqsay=0;
// for(let i=0;i<text.length;i++){
//     if(text[i]===" "){
//         bosluqsay+=1;
//     }
// }
// console.log(bosluqsay);

// ---------------------------------------
// ---------------------------------------

// let text="Azerbaycan. quclu, dovletdir. kisi kimidir, ozde, budur.,";
// console.log(text);
// let vergul=0;
// let noxta=0;
// for(let i=0;i<text.length;i++){
//     if(text[i]===","){
//         vergul++;
//     }
//     if(text[i]==="."){
//         noxta++;
//     }
    
// }
// console.log(vergul);
// console.log(noxta);