// let arr = [1, 3, 5, 7];
// // for (let i = 0; i < arr.length; i++) {
// arr.forEach((x) => console.log(x));
// // }

// ------------------------------------------------------------------------------------
// ____________________________________________________________________________________

// const arr= [1,26,7];
// console.log(arr.includes(26)); ;

// ------------------------------------------------------------------------------------
// ____________________________________________________________________________________
let text =["alma","armud","nar"]
let myArr = [[1,2],[3,4],[5,6]];
let arr = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr = myArr1.flatMap((x) => x * 2);
console.log("flatMap: ",newArr); // 2 ye vurduq
console.log("at:", arr.at(2));
console.log("concat:", arr.concat(arr2));
// console.log("fill: ", arr.fill(2,   1, 5)); // 1 den 5 e kimi evez edir (2 ile)
console.log("flat: ",myArr.flat());  // birlesdirir
console.log("join: ",arr.join("-")); // arraydan stringe cevirir

text.forEach(mos);
let elem,i;
function mos(elem,i) {
     text+=text + ":" + elem;
     return text;
}
console.log("forEach: ",mos(elem,i));








// ------------------------------------------------------------------------------------
// ____________________________________________________________________________________

// let array = ["lankaran", "baki", "masalli", "lerik", "astara"];
// function removed(arr) {
// //   for (let i = 0; i < array.length; i++) {
//     arr.shift();
//     // console.log(arr);
// //   }
//     return arr;
// }
// console.log(removed(array));
