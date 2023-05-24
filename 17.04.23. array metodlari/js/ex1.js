let array = ["lankaran", "baki", "masalli", "lerik", "astara"];
function removed(arr) {
//   for (let i = 0; i < array.length; i++) {
    arr.shift();
    // console.log(arr);
//   }
    return arr;
}
console.log(removed(array));