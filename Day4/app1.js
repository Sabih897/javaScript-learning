// import {readFile, writeFile} from "fs/promises";

// const data = await readFile('Day4/data.json','utf-8');

// const data1 = JSON.parse(data);
// let totalprice=0;
// data1.forEach(el => {

//     totalprice += el.price;
// });
// console.log(totalprice);
// const result = JSON.stringify(totalprice);

// await writeFile("result.json", result);

import { readJSON, writeJSON } from "./fileHandler.js";
import { validateProducts } from "./validator.js";
import { generateReport } from "./businessLogic.js";

const data = await readJSON("Day4/data/products.json");

const valid = validateProducts(data);
let report;
try {
  if (valid) {
   report =  generateReport(data);
   await writeJSON("Day4/report.json", report);
   console.log("Report generated Successfully");
   
  } else {
    throw new Error("data is not valid");
  }
} catch (err) {
  console.log(err.message);
}


  

