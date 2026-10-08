import express from "express";
import routes from "../Day10/routes.js";

const port = 8080;

const app = express();

app.use(express.json());


app.use("/", routes);

app.listen(port, () => {
  console.log(`website is live at http://localhost:${port}/`);
});
