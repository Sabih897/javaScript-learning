import express from "express";

const app = express();
const port = 8080;

const product = { name: "Notebook" };

app.use((req, res, next) => {
  const query = req.path;
  const method = req.method;
  req.requestTime = new Date();
  console.log({ query: query, method: method, date: new Date() });

  next();
});

app.use(express.json());

function validateProduct(req, res, next) {
  const name = req.body?.name;

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      error: "Product name is required",
    });
  }

  next();
}

app.post("/products", validateProduct, (req, res) => {
  const product = req.body;
  res.send(product);
});

app.get("/products", (req, res) => {
  res.send(req.requestTime);
});

app.get("/temp", (req, res, next) => {
  next(new Error("test error"));
});

app.use((req, res, next) => {
  res.status(404).json({
    error: "Page not Found!",
  });
});

function errorMiddleware(error, req, res, next) {
  return res.status(500).json({
    error: "Bad Gateway",
  });
}
app.use(errorMiddleware);

app.listen(port, () => {
  console.log("Server is running at port 8080");
});
