let fruits = ["apple", "banana", "cherry", "avacado", "berry"];
fruits[5] = "rasberry";
fruits[0] = "banana";
fruits[1] = "apple";

let tools = ["hammer", "screwdriver"];

console.log(fruits[1]);
console.log(tools[0]);
console.log(tools[1]);

let todo = ["Read"];
todo.push("code"); // add item to the last
todo.push("sleep");
todo.push("repeat");
todo.push("repeat");
todo.pop();

todo.shift(); // removes item from beg.

todo.unshift("Eat");

todo.forEach((element) => {
  console.log(element);
});

console.log(todo);

const arr = todo.slice(1, 3);
console.log(arr);
const arr2 = todo.splice(1, 3);
console.log(arr2);
console.log(todo);

const arr1 = [1, 2, 3, 4];
const arr3 = [5, 6, 7, 8];
// arr1.push(arr3);    // array in array
// console.log(arr1);
// console.log(arr1[4][3]);  // array in array

const n = arr1.concat(arr3); // merge 2 arrays but didn't change in org array
console.log(n);
console.log(arr1);

// spread
const n1 = [...arr1, ...arr3, ...todo]; // use to merge arrays into new array

console.log(n1);

const new_array = [1, 2, 3, 4, [5, 6, [7, 8, [9], 10, 11], 12, 13], 14, 15];

const new1_array = new_array.flat(Infinity);
console.log(new1_array);

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1, num2, num3));

// console.log(a);
// let a = 20;

// for(var i=0; i<3; i++){
//     setTimeout(()=> console.log(i),1000);
// }
// for(let i=0; i<3; i++){
//     setTimeout(()=> console.log(i),1000);
// }

const arr4 = [1, 2, 3, 4, 5];

let new_arr = arr4.map((value) => {
  console.log(value);
  return value + 100;
});

console.log(new_arr);

// map vs foreach
// map -> takes old array and returns new array and let perform opr on that
// foreach -> itirate to every element of an array

// map usecase -> 1
const user = [
  { id: 1, name: "sabih", role: "sde" },
  { id: 2, name: "akbar", role: "developer" },
  { id: 3, name: "mohd", role: "tester" },
];

const names = user.map((user) => user.name); // did not make changes in actual array
console.log(names);

// map usecase -> 2
// discounted products

const products = [
  { name: "shirts", price: 500 },
  { name: "Jeans", price: 400 },
  { name: "jogger", price: 800 },
  { name: "t-shirt", price: 600 },
];

const discountedProducts = products.map((products) => {
  return {
    ...products,
    price: products.price * 0.9,
  };
});

console.log(discountedProducts);

let a = products.filter((product) => {
  return product.price > 450;
});

console.log(a);

let a2 = arr4.filter((a) => {
  // did not make changes in actual array
  return a < 3;
});

let a3 = arr4.filter((a) => a < 3);
console.log(a2);
console.log(a3);

// practice qs - 1

let discount = products
  .map((product) => {
    return {
      name: product.name,
      price: product.price * 0.9,
    };
  })
  .filter((product) => product.price < 550);

console.log(discount);

const bills = [
  { name: "shirts", price: 500 },
  { name: "Jeans", price: 400 },
  { name: "jogger", price: 800 },
  { name: "t-shirt", price: 600 },
];

let totalBill = bills
  .map((product) => product.price)
  .reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
  });

console.log(totalBill);

const user2 = [
  { id: 1, name: "sabih", role: "sde" },
  { id: 2, name: "akbar", role: "developer" },
  { id: 3, name: "mohd", role: "tester" },
];

let user3 = user2.find((user) => user.id === 2);
console.log(user3);

let bill = bills.some((a) => a.price < 550);
console.log(bill);

let bill2 = bills.every((a) => a.price < 550);
console.log(bill2);

fruits.toSorted();
console.log(fruits);

console.log(fruits.toSorted());

fruits.sort();
console.log(fruits);

let a5 = function () {
  console.log("Normal function");
};

let fun = () => {
  return "Arrow function";
};

console.log(fun());
a5();


console.log(null == undefined);
console.log(null === undefined);