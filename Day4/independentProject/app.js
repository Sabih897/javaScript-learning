import { readJSON, writeJSON } from "../fileHandler.js";
import { activeStatus } from "./bussinessLogic.js";
import { validate } from "./validator.js";

const data = await readJSON("Day4/independentProject/data/users.json");

try {
  if (validate) {
    const result = activeStatus(data);
    await writeJSON("Day4/independentProject/report.json", result);
    console.log("Report generated Successfully.");
  } else {
    throw new Error("data is incorrect.");
  }
} catch (err) {
  console.log(err.message);
}
