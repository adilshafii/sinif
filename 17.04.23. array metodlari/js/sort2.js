let students = [
  {
    ad: "Senuber",
    soyad: "Besirzade",
    yas: "23",
    kesir: false,
    hobbies: ["gitara", "resm", "mahni"],
  },
  {
    ad: "Zeyneb",
    soyad: "Xanizade",
    yas: "20",
    kesir: false,
    hobbies: ["musiqi", "gezmek"],
  },
  {
    ad: "Yusif",
    soyad: "Memmedov",
    yas: "28",
    kesir: false,
    hobbies: ["xarici dil", "alqoritm"],
  },
  {
    ad: "Cavid",
    soyad: "Zeynalov",
    yas: "22",
    kesir: false,
    hobbies: ["seir yazmaq", "xarici olkeler"],
  },
  {
    ad: "Yusif",
    soyad: "Tagiyev",
    yas: "23",
    kesir: false,
    hobbies: ["oyun", "futbol", "voleybol"],
  },
  {
    ad: "Adil",
    soyad: "Sefizade",
    yas: "21",
    kesir: false,
    hobbies: ["futbol", "voleybol", "at capmaq", "tarixi faklarla maraqlanmaq"],
  },
  {
    ad: "Adil",
    soyad: "Mediyev",
    yas: "28",
    kesir: false,
    hobbies: ["kofe duzeltmek", "jazz"],
  },
  {
    ad: "Vasif",
    soyad: "Ejderov",
    yas: "20",
    kesir: true,
    hobbies: ["futbol oynamaq", "masin surmek"],
  },
];
// function printstudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.table(arr);
//   }
//   return arr;
// }
// console.log(printstudents(students));

// -----------------------------------------------------
// _____________________________________________________

// function printstudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     //     // console.table(arr);
//     console.log(`<${arr[i].ad} ${arr[i].soyad}>`);
//   }
// }
// printstudents(students);

// -----------------------------------------------------
// _____________________________________________________

// function printstudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].yas>24){
//         console.log(`<${arr[i].ad} ${arr[i].soyad} ${arr[i].yas} "yas">`);
//     }
//   }
// }
// printstudents(students)

// -----------------------------------------------------
// _____________________________________________________

// function printstudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].kesir === true) {
//       console.log(`${arr[i].ad} > Hobbies: ${arr[i].hobbies} `);
//     }
//   }
// }
// printstudents(students);

// -----------------------------------------------------
// _____________________________________________________

//Soyadinda Sonu ov olanlari ad ve soydlari ile cixisa veren proqram yazin!

// function printstudents(arr) {
//     for (let i = 0; i < arr.length; i++){
//       if(arr[i].soyad[arr[i].soyad.length-1]==="v" && arr[i].soyad[arr[i].soyad.length-2]==="o"){
//           console.log(arr[i].ad,arr[i].soyad);
//       }

//     }
//   }
//   printstudents(students)

// -----------------------------------------------------
// _____________________________________________________

// Tekrarlanan adlari olan telebelerin ad ve soyadini cixisa veren proqram yazin!

function printstudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j=i+1; j < arr.length; j++) {
      if (arr[i].ad === arr[j].ad) {
        console.log(`${arr[i].ad} ${arr[i].soyad}`);
        console.log(`${arr[j].ad} ${arr[j].soyad}`);
      }
    }
  }
}
printstudents(students);

// -----------------------------------------------------
// _____________________________________________________
