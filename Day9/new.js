import express from "express";
const app = express();

app.use(express.json());

const port = 8080;

const products = [
  {
    _id: 101,
    name: "Laptop",
    price: 55000,
    category: "electronics",
  },
  {
    _id: 102,
    name: "Dell Laptop",
    price: 55000,
    category: "electronics",
  },
];
const products2 = [
  {
    _id: 103,
    name: "Mouse",
    price: 800,
    category: "electronics",
  },
];
app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/products", (req, res) => {
  const data = req.body;
  products.push(data);
  res.status(201).json(data);

  console.log(req.body);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p._id == id);
  res.send(product);
});
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  const product1 = products.find((p) => p._id == id);
  if (!product1) {
    return res.status(404).json({ message: "Product not found" });
  }
  product1.name = product.name;
  product1.price = product.price;
  product1.category = product.category;
  res.status(200).json(product1);
});

app.delete("/products/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`website is live at port ${port}`);
});
