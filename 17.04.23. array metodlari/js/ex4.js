// // 1-ci tapsiriq - 3 xarakter

// const arr = ["lankaran", "baki", "masalli", "lerik", "astara"];
// function azalt(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i].slice(0, 3);
//     // console.log(array);
// }
//   return array;
// }
// console.log(azalt(arr));



// // 2-ci tapsiriq - kicik L herfile baslayanlari silen prgm

// const arr = ["lankaran", "baki", "masalli", "lerik", "astara"];
// let newArray=arr.filter(removed);
// function removed(array) {
//     if(array[0]!=="l"){

//         return array;
//     }

// }
// console.log(removed(newArray));


// 3-cu tapshiriq  [mandalin,limon]

const arr = ["lankaran", "baki", "masalli", "lerik", "astara"];
function cevir(array) {
    array.splice(2, 0, ["mandalin", "limon"]);
    return array;
}


console.log(cevir(arr));