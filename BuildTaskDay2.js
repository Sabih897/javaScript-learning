function validateProducts({name, price , category, stock = 0}) {
  if (!name || !price || !category) {
    throw new Error("one or more fields are empty");
  } 
   if (!Number.isInteger(price)) {
    throw new Error("price type should be integer")
  }
  if(price < 50000){
    throw new Error(` ${name}'s starting price should be more than 50000`)
  }
  if (!Number.isInteger(stock) || stock < 0) {
    throw new Error("stock type should be integer and greater than 0");
  }
}

const product = {
  name: "Car",
  price: 50000,
  category: "Vehicle",
  stock: 0,
};

try {
    validateProducts(product);
    console.log(product);
    
} catch (error) {
    console.log(error.message);
    
}

const stringifyProduct = JSON.stringify(product);
console.log(stringifyProduct);
const parsedProduct = JSON.parse(stringifyProduct);
console.log(parsedProduct);

