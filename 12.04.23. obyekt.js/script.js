// const obj={
//     name: "Adil",
//     surname: "Shafizada",
//     age: "22",
// };
// console.log(obj);
// // console.log(obj.name,obj.surname,obj.age); 
// // console.log(obj["name"]);
// // console.log(obj["surname"]);
// // console.log(obj["age"]);
// obj.salary=1700;  //Elave edir//
// delete obj.name;  //Silir//
// delete obj.salary;
// console.log(obj);


// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------


// const arr = [
//     {
//       id: 4,
//       supplierId: 2,
//       categoryId: 3,
//       quantityPerUnit: "48 - 6 oz jars",
//       unitPrice: 22,
//       unitsInStock: 53,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Chef Anton's Cajun Seasoning",
//       supplier: {},
//       category: {
//         id: 3,
//         description: "Desserts candies and sweet breads",
//         name: "Confections",
//       },
//     },
//     {
//       id: 5,
//       supplierId: 2,
//       categoryId: 2,
//       quantityPerUnit: "36 boxes",
//       unitPrice: 21.35,
//       unitsInStock: 0,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Chef Anton's Gumbo Mix",
//     },
//     {
//       id: 6,
//       supplierId: 3,
//       categoryId: 2,
//       quantityPerUnit: "12 - 8 oz jars",
//       unitPrice: 25,
//       unitsInStock: 120,
//       unitsOnOrder: 0,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Grandma's Boysenberry Spread",
//     },
//     {
//       id: 7,
//       supplierId: 3,
//       categoryId: 7,
//       quantityPerUnit: "12 - 1 lb pkgs.",
//       unitPrice: 30,
//       unitsInStock: 15,
//       unitsOnOrder: 0,
//       reorderLevel: 10,
//       discontinued: false,
//       name: "Uncle Bob's Organic Dried Pears",
//     },
//     {
//       id: 8,
//       supplierId: 3,
//       categoryId: 2,
//       quantityPerUnit: "12 - 12 oz jars",
//       unitPrice: 40,
//       unitsInStock: 6,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Northwoods Cranberry Sauce",
//     },
//     {
//       id: 9,
//       supplierId: 4,
//       categoryId: 6,
//       quantityPerUnit: "18 - 500 g pkgs.",
//       unitPrice: 97,
//       unitsInStock: 29,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Mishi Kobe Niku",
//     },
//     {
//       id: 10,
//       supplierId: 4,
//       categoryId: 8,
//       quantityPerUnit: "12 - 200 ml jars",
//       unitPrice: 31,
//       unitsInStock: 31,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Ikura",
//     },
//     {
//       id: 2,
//       supplierId: 1,
//       categoryId: 1,
//       quantityPerUnit: "24 - 12 oz bottles",
//       unitPrice: 19,
//       unitsInStock: 17,
//       unitsOnOrder: 40,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Chang",
//     },
//     {
//       id: 3,
//       supplierId: 1,
//       categoryId: 2,
//       quantityPerUnit: "12 - 550 ml bottles",
//       unitPrice: 10,
//       unitsInStock: 13,
//       unitsOnOrder: 70,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Aniseed Syrup",
//     },
//     {
//       id: 11,
//       supplierId: 5,
//       categoryId: 2,
//       quantityPerUnit: "1 kg pkg.",
//       unitPrice: 21,
//       unitsInStock: 22,
//       unitsOnOrder: 30,
//       reorderLevel: 30,
//       discontinued: false,
//       name: "Queso Cabrales 2",
//       supplier: {
//         id: 5,
//         companyName: "Cooperativa de Quesos 'Las Cabras'",
//         contactName: "Antonio del Valle Saavedra",
//         contactTitle: "Export Administrator",
//         address: {
//           street: "Calle del Rosal 4",
//           city: "Oviedo",
//           region: "Asturias",
//           postalCode: 33007,
//           country: "Spain",
//           phone: "(98) 598 76 54",
//         },
//       },
//       category: {
//         id: 4,
//         description: "Cheeses",
//         name: "Dairy Products",
//       },
//     },
//     {
//       id: 12,
//       supplierId: 5,
//       categoryId: 4,
//       quantityPerUnit: "10 - 500 g pkgs.",
//       unitPrice: 38,
//       unitsInStock: 86,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Queso Manchego La Pastora",
//     },
//     {
//       id: 13,
//       supplierId: 6,
//       categoryId: 8,
//       quantityPerUnit: "2 kg box",
//       unitPrice: 6,
//       unitsInStock: 24,
//       unitsOnOrder: 0,
//       reorderLevel: 5,
//       discontinued: false,
//       name: "Konbu",
//     },
//     {
//       id: 14,
//       supplierId: 6,
//       categoryId: 7,
//       quantityPerUnit: "40 - 100 g pkgs.",
//       unitPrice: 23.25,
//       unitsInStock: 35,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Tofu",
//     },
//     {
//       id: 15,
//       supplierId: 6,
//       categoryId: 2,
//       quantityPerUnit: "24 - 250 ml bottles",
//       unitPrice: 15.5,
//       unitsInStock: 39,
//       unitsOnOrder: 0,
//       reorderLevel: 5,
//       discontinued: false,
//       name: "Genen Shouyu",
//     },
//   ];

// //   for(let i=0;i<arr.length;i++){
// //     if(arr[i].unitPrice>20){
// //         console.log(arr[i].unitPrice);
// //     }
// // }


// for(let i=0;i<arr.length;i++){
//     if(arr[i].name[0].toLocaleLowerCase() === "A".toLocaleLowerCase()){
//         console.log(arr[i]);
//     }
// }

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------