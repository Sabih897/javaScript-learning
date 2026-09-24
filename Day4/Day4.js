// import math from "./math.js";

// console.log(math.add(2, 3));
// console.log(math.subtract(2, 3));
// console.log(math.multiply(2, 3));

// const path = require("path");
// const filePath = path.join("data", "users", "users.json");
// console.log(filePath);


import { readFile, writeFile, appendFile } from "fs/promises";
// const data = await readFile("test.txt", "utf-8");
// for(let j=0; j<100; j++){
//  await appendFile("test.txt"," Hello again");
// }
//  const data2 = await readFile("test.txt", "utf-8");

// console.log(data);
// console.log(data2);

const data = await readFile("users.json", "utf-8");
const jsonData = JSON.parse(data);
console.log(jsonData);
jsonData[2] = {name : "Sabih", age: 23};


const jsonString = JSON.stringify(jsonData);
 await writeFile("user1.json",jsonString);
