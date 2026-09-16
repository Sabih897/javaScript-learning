const products = [
  { name: "shirts", price: 500 },
  { name: "Jeans", price: 400 },
  { name: "jogger", price: 800 },
  { name: "t-shirt", price: 600 },
];

let names = products.map((a) => a.name);
console.log(names);

const products1 = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    stock: 45,
  },
  {
    id: 2,
    name: "Leather Journal",
    category: "Stationery",
    price: 15.5,
    stock: 0,
  }, // Out of stock!
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 89.99,
    stock: 12,
  },
  {
    id: 4,
    name: "Ergonomic Chair",
    category: "Furniture",
    price: 249.99,
    stock: 5,
  },
  {
    id: 5,
    name: "Gel Pens (12-pack)",
    category: "Stationery",
    price: 8.99,
    stock: 120,
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 0,
  }, // Out of stock!
  {
    id: 7,
    name: "Standing Desk",
    category: "Furniture",
    price: 450.0,
    stock: 3,
  },
];

let stockLeft = products1.filter((a) => a.stock > 0);
console.log(stockLeft);

let productCategory = products1.map((a) => a.category);
console.log(productCategory);

let totalValue = products1.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue.price;
},0);

console.log(totalValue);
