const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 2499,
    stock: 35,
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 3499,
    stock: 20,
  },
  {
    id: 3,
    name: "Wireless Gaming Mouse",
    category: "Electronics",
    price: 1599,
    stock: 42,
  },
  {
    id: 4,
    name: "Smart LED TV 43 Inch",
    category: "Electronics",
    price: 28999,
    stock: 12,
  },
  {
    id: 5,
    name: "USB-C Fast Charger",
    category: "Electronics",
    price: 899,
    stock: 75,
  },
  {
    id: 6,
    name: "Power Bank 20000mAh",
    category: "Electronics",
    price: 1499,
    stock: 50,
  },
  { id: 7, name: "Smart Watch", category: "Wearables", price: 3999, stock: 28 },
  {
    id: 8,
    name: "Fitness Tracker",
    category: "Wearables",
    price: 2199,
    stock: 31,
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1799,
    stock: 45,
  },
  {
    id: 10,
    name: "Webcam Full HD",
    category: "Electronics",
    price: 2299,
    stock: 18,
  },

  {
    id: 11,
    name: "Men's Cotton T-Shirt",
    category: "Clothing",
    price: 599,
    stock: 80,
  },
  {
    id: 12,
    name: "Women's Casual T-Shirt",
    category: "Clothing",
    price: 649,
    stock: 65,
  },
  {
    id: 13,
    name: "Men's Slim Fit Jeans",
    category: "Clothing",
    price: 1599,
    stock: 40,
  },
  {
    id: 14,
    name: "Women's Denim Jacket",
    category: "Clothing",
    price: 2299,
    stock: 25,
  },
  {
    id: 15,
    name: "Men's Running Shoes",
    category: "Footwear",
    price: 2799,
    stock: 32,
  },
  {
    id: 16,
    name: "Women's Sports Shoes",
    category: "Footwear",
    price: 2499,
    stock: 29,
  },
  {
    id: 17,
    name: "Leather Wallet",
    category: "Accessories",
    price: 899,
    stock: 55,
  },
  {
    id: 18,
    name: "Canvas Backpack",
    category: "Accessories",
    price: 1299,
    stock: 38,
  },
  {
    id: 19,
    name: "Sunglasses",
    category: "Accessories",
    price: 999,
    stock: 47,
  },
  {
    id: 20,
    name: "Analog Wrist Watch",
    category: "Accessories",
    price: 1999,
    stock: 22,
  },

  {
    id: 21,
    name: "Ceramic Coffee Mug",
    category: "Home",
    price: 299,
    stock: 100,
  },
  {
    id: 22,
    name: "Stainless Steel Water Bottle",
    category: "Home",
    price: 799,
    stock: 70,
  },
  {
    id: 23,
    name: "Non-Stick Frying Pan",
    category: "Kitchen",
    price: 1299,
    stock: 34,
  },
  {
    id: 24,
    name: "Electric Kettle",
    category: "Kitchen",
    price: 1599,
    stock: 27,
  },
  {
    id: 25,
    name: "Mixer Grinder",
    category: "Kitchen",
    price: 3499,
    stock: 16,
  },
  { id: 26, name: "Air Fryer", category: "Kitchen", price: 4999, stock: 14 },
  { id: 27, name: "Table Lamp", category: "Home", price: 899, stock: 43 },
  { id: 28, name: "LED Strip Lights", category: "Home", price: 699, stock: 60 },
  { id: 29, name: "Wall Clock", category: "Home", price: 799, stock: 35 },
  {
    id: 30,
    name: "Decorative Cushion Set",
    category: "Home",
    price: 999,
    stock: 26,
  },

  { id: 31, name: "Face Wash", category: "Beauty", price: 349, stock: 90 },
  {
    id: 32,
    name: "Moisturizing Cream",
    category: "Beauty",
    price: 499,
    stock: 72,
  },
  { id: 33, name: "Shampoo", category: "Beauty", price: 599, stock: 85 },
  { id: 34, name: "Body Lotion", category: "Beauty", price: 449, stock: 68 },
  { id: 35, name: "Perfume", category: "Beauty", price: 1499, stock: 40 },
  { id: 36, name: "Hair Dryer", category: "Beauty", price: 1799, stock: 24 },
  {
    id: 37,
    name: "Electric Trimmer",
    category: "Beauty",
    price: 1299,
    stock: 36,
  },
  {
    id: 38,
    name: "Makeup Brush Set",
    category: "Beauty",
    price: 799,
    stock: 52,
  },
  { id: 39, name: "Lip Balm Set", category: "Beauty", price: 299, stock: 110 },
  {
    id: 40,
    name: "Sunscreen SPF 50",
    category: "Beauty",
    price: 699,
    stock: 63,
  },

  { id: 41, name: "Yoga Mat", category: "Sports", price: 999, stock: 45 },
  { id: 42, name: "Dumbbell Set", category: "Sports", price: 2499, stock: 18 },
  { id: 43, name: "Cricket Bat", category: "Sports", price: 2999, stock: 15 },
  { id: 44, name: "Football", category: "Sports", price: 899, stock: 30 },
  {
    id: 45,
    name: "Badminton Racket",
    category: "Sports",
    price: 1199,
    stock: 25,
  },
  {
    id: 46,
    name: "Resistance Bands",
    category: "Sports",
    price: 599,
    stock: 55,
  },
  {
    id: 47,
    name: "Office Chair",
    category: "Furniture",
    price: 7499,
    stock: 0,
  },
  { id: 48, name: "Study Table", category: "Furniture", price: 5999, stock: 8 },
  { id: 49, name: "Bookshelf", category: "Furniture", price: 4499, stock: 13 },
  {
    id: 50,
    name: "Sofa Cushion Set",
    category: "Furniture",
    price: 1299,
    stock: 0,
  },
];

const result = products.map((names) => {
  return {
    name: names.name,
  };
});

// console.log(result);

const result2 = products.filter((product) => {
  return product.price < 1000;
});
// console.log(result2);

const result3 = products.reduce((total, product) => {
  return total + product.price * product.stock;
}, 0);

// console.log(result3);

const result4 = products.find((product) => product.name === "Canvas Backpack");
// console.log(result4);

const result5 = products.some((product) => product.stock <= 0);

// console.log(result5);

const result6 = products.every((product) => product.price > 0);

// console.log(result6);

// Search operation

function searchProducts(products, query) {
  return products.filter((product) => {
    if (
      query.name &&
      !product.name.toLowerCase().includes(query.name.toLowerCase())
    ) {
      return false;
    }
    if (query.category && product.category !== query.category) {
      return false;
    }
    if (query.maxPrice !== undefined && product.price > query.maxPrice) {
      return false;
    }
    if (query.inStock && product.stock <= 0) {
      return false;
    }
    return true;
  });
}

const query = {
  name: "Electric Trimmer",
  category: "Beauty",
  maxPrice: 1299,
  inStock: true,
};

const res = searchProducts(products, query);
// console.log(res);

// Pagination

// using for loop
// function paginationProducts(products, page, limit) {
//   const skip = (page - 1) * limit;
//   let j = 0;
//   const product = [];
//   for (let i = skip; i < skip + limit; i++) {
//     product[j] = products[i];
//     j++;
//   }
//   return product;
// }

// using array slice method
function paginationProducts(products, page, limit) {
  const skip = (page - 1) * limit;
  return products.slice(skip, skip + limit);
}

const res1 = paginationProducts(products, 3, 3);
// console.log(res1);

function validateQuery(query) {
  if (query.name && typeof query.name !== "string") {
    throw new Error("name should be string");
  }
  if (query.category && typeof query.category !== "string") {
    throw new Error("Category should be string");
  }
  if (query.maxPrice !== undefined && typeof query.maxPrice !== "number") {
    throw new Error("maxPrice must be a number");
  }
  if (query.maxPrice !== undefined && query.maxPrice < 0) {
    throw new Error("maxPrice should be within constraints");
  }
  if (query.inStock !== undefined && typeof query.inStock !== "boolean") {
    throw new Error("inStock must be true or false only.");
  }
  return;
}
const query1 = {
  name: "Electric Trimmer",
  category: "Beauty",
  maxPrice: 1299,
  inStock: true,
};

try {
  validateQuery(query1);
} catch (error) {
  console.log(error.message);
}

function getProductSummary(products) {
  return {
    totalProducts: products.length,
    totalStock: products.reduce((total, product) => {
      return total + product.stock;
    }, 0),
    totalInventoryValue: products.reduce((total, product) => {
      return total + product.price * product.stock;
    }, 0),
    outOfStock: products.reduce((total, product) => {
      return total + (product.stock <= 0);
    }, 0),
  };
}

const summary = getProductSummary(products);
// console.log(summary);

import { readFile, writeFile } from "fs/promises";

async function loadProducts(path) {
  const data = await readFile(path, "utf-8");
  const products = JSON.parse(data);
  return products;
}

try {
  const products = await loadProducts("Day6/data/products.json");
  // console.log(products);
} catch (error) {
  console.log(error.message);
}

// Mini Product Service

async function runProductService(query, page, limit) {
  let product;
  try {
     product = await loadProducts("Day6/data/products.json");
  } catch (error) {
    throw Error(error.message);
    
  }
  const search = searchProducts(product, query);
  return {
    products : product,
    searchResult: search,
    pagination: paginationProducts(search, page, limit),
    summary: getProductSummary(search),
  };
}

try {
  const res = await runProductService(query1, 1,2);
  const data = JSON.stringify(res,null,2);
  await writeFile('Day6/data/productService.json',data);
  console.log("data gets stored in data folder successfully.");
  
  
} catch (error) {
  console.log(error.message);
  
}