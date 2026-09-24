// function buyProduct(balance, price) {
//   if (price <= 0) {
//     throw new Error("Buy price must be greater than 0");
//   }
//   if (price > balance) {
//     throw new Error("Insufficient balance");
//   }
//   const remaining = balance - price;

//   return remaining;
// }

// try {
//   console.log(buyProduct(1000, 500));
// } catch (err) {
//   console.log(err.message);
// }

const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 },
  { id: 2, name: "Mouse", price: 800, stock: 10 },
  { id: 3, name: "Keyboard", price: 1500, stock: 0 },
];

function getAvailableProducts(products) {
  return products
    .filter((product) => product.stock > 0)
    .map((product) => ({
      name: product.name,
      totalPrice: product.price * product.stock,
    }));
}

function findProduct(products, id) {
  return products.find((product) => product.id === id);
}

function getProductFromServer(products, id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = findProduct(products, id);

      if (!product) {
        reject(new Error("Product not found"));
      }

      resolve(product);
    }, 500);
  });
}

async function buyProduct(products, id, quantity) {
  const product = await getProductFromServer(products, id);

  if (quantity <= 0) {
    throw new Error("Quantity must be greater than 0");
  }

  if (quantity > product.stock) {
    throw new Error("Not enough stock");
  }

  product.stock -= quantity;

  return {
    name: product.name,
    remainingStock: product.stock,
  };
}

console.log("Available products:");
console.log(getAvailableProducts(products));

buyProduct(products, 2, 1).then((result) => {
  console.log("Purchase:", result);
  console.log("Final inventory:", products);
})
.catch(err=>{
    console.log(err.message);
    
})
