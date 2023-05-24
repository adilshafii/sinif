arr = [
  2,
  9,
  6,
  11,
  -5,
  -3,
  8,
  6,
  "Azerbaycan",
  true,
  12,
  346,
  "LANKARAN",
  "limon",
  2,
  9,
  182,
];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    if (max < arr[i].length) {
      max = arr[i].length;
      console.log(arr[i]);
    }
  }
}
