import express from "express";

const app = express();

const port = 8080;

function validation(req, res, next) {
  const name = req.body?.name;
  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      error: "name should exist",
    });
  }
  next();
}

app.use((req, res, next) => {
  req.requestTime = new Date();
  const method = req.method;
  const path = req.path;
  console.log({
    loginTime: req.requestTime,
    method: method,
    path: path,
  });
  next();
});

app.use(express.json());

app.get("/products", (req, res) => {
  res.send("hello");
});

app.post("/products", validation, (req, res) => {
  const product = req.body;
  res.send(product);
});

app.get("/temp", (req, res, next) => {
  next(new Error("test error"));
});

app.use((req, res, next) => {
  res.status(404).json({
    error: "page not found!",
  });
});

app.use((error, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`website is live at http://localhost:${port}`);
});
