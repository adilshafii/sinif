fetch("https://northwind.vercel.app/api/orders")
  .then((res) => res.json())
  .then((data) => console.log(data));
