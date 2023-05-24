let arr = [
    {
    "id": 2,
    "description": "Sweet and savory sauces relishes spreads and seasonings",
    "name": "Condiments"
    },
    {
    "id": 1,
    "description": "Soft drinks coffees teas beers and ales",
    "name": "Beverages"
    },
    {
    "id": 3,
    "description": "Desserts candies and sweet breads",
    "name": "Confections"
    },
    {
    "id": 4,
    "description": "Cheeses",
    "name": "Dairy Products"
    },
    {
    "id": 5,
    "description": "Breads crackers pasta and cereal",
    "name": "Grains/Cereals"
    },
    {
    "id": 6,
    "description": "Prepared meats",
    "name": "Meat/Poultry"
    },
    {
    "id": 7,
    "description": "Dried fruit and bean curd",
    "name": "Produce"
    },
    {
    "id": 8,
    "description": "Seaweed and fish",
    "name": "Seafood"
    }
    ];
    console.table(arr);
    console.log("yuxari evvel,, asagi sonra: ");
    console.table(arr.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)));