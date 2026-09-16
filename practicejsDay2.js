let arr = [1, 2, 3, 4, [4, 5, 6], 8, 9, 0];
console.log(arr[4][1]);

let obj = {
  name: "hello",
  role: {
    new: "SDE",
    old: "Dev",
  },
};

console.log(obj.role.new);

// let users = [
//   { name: "A", skills: ["JS", "React"] },
//   { name: "B", skills: ["Python", "Django"] },
// ];

// console.log(users[0].skills[1]);

// let user = {
//     name: "hello"
// }
// console.log(user.profile.name);  //TypeError : cannot read properties of undefined.

// optional chaining

// let user = {
//   name: "hello",
// };

// console.log(user.profile?.age);

let user1 = {
  profile: {
    name: "hello",
  },
};
console.log(user1.profile?.age);

// Nullish Coalescing ??
let username;
console.log(username ?? "alex");
console.log(null ?? "alex");
console.log(undefined ?? "alex");
console.log(false ?? "alex"); //o/p -> false cuase its only falback for null or undefined
console.log(0 ?? "alex"); // o/p -> 0

console.log("hello" && "hey");

console.log("hello" || "hey");
console.log(0 || "hey");
console.log(0 || 0);

// Default parameters

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
greet("Sabih");

function createUser(name = "Guest", age = 18) {
  console.log(name, age);
}

createUser("Sabih");
createUser();
createUser(undefined, 23);
createUser(null, 24); // default works only for undefined not for every falsy value
createUser(0, 24);

function sumNumbers(...number) {
  return number.reduce((a, b) => a + b, 0);
}

console.log(sumNumbers(10, 20, 30, 40));

// Destruction

const product = {
  name: "Laptop",
  price: 60000,
  category: "Electronics",
};

const { name: productName, price: productPrice } = product;

console.log(productName, productPrice);

const scores = [85, 92, 78, 96, 88];

const [firstScore, , thirdScore, , lastScore] = scores;

console.log(firstScore, thirdScore, lastScore);

console.log(
  `Laptop costs ${product.price} and belongs to ${product.category} category `,
);

function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  safeDivide(2, 5);
  safeDivide(2, 0);
} catch (err) {
  console.log(err.message);
} finally {
  console.log("executed");
}

const jsonProduct = JSON.stringify(product);
const parsedProduct = JSON.parse(jsonProduct);
console.log(parsedProduct.name);
console.log(parsedProduct.price);

console.log(typeof jsonProduct);

function validateUser(user) {
  if (user?.name === undefined) {
    throw new Error("Name is required");
  }
  if (user?.age === undefined) {
    throw new Error("Age is required");
  }
  return `${user.name} is ${user.age} years old`;
}

let user2 = {
  name: "hello",
};

try {
  console.log(validateUser(user2));
} catch (err) {
  console.log(err.message);
} finally {
  console.log("validation finished");
}

// coding practice q1

const user = {
  name: "Alex",
  profile: {
    age: 21,
    city: "Delhi",
  },
};

const user3 = {
  name: "hello",
};

function getUserInfo(user) {
  if (!user.profile) {
    throw new Error(`${user.name}'s profile is unavailable`);
  }
  return `${user.name} is ${user.profile.age} years old and lives in ${user.profile.city}`;
}

try {
  console.log(getUserInfo(user));
  console.log(getUserInfo(user3));
} catch (err) {
  console.log(err.message);
} finally {
  console.log("finished");
}

const users = [
  { name: "Alex", age: 21, role: "SDE" },
  { name: "Sam", age: 24, role: "Designer" },
  { name: "John", age: 19, role: "Intern" },
];

function getUserSummaries(users) {
  let newUser = users.map((a) => {
    return { name: a.name, role: a.role };
  });
  return newUser;
}

console.log(getUserSummaries(users));

function createMenu(options) {
  return {
    title: options.title ?? "Untitled",
    size: options.size ?? "Regular",
    price: options.price ?? 0,
    available: options.available ?? true,
  };
}

let userMenu = createMenu({
  title: "Burger",
  price: 120,
});

let user2Menu = createMenu({});

console.log(userMenu);
console.log(user2Menu);
