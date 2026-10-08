import { Router } from "express";
import { validate } from "../Day10/validation.js";

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

const router = Router();

router.get('/',(req, res) => {
  res.send("this is main route page");
});

router.get("/products",(req, res) => {
  if (req.query.category) {
    const category = req.query.category;
    const product = products.filter((p) => p.category === category);
    res.json(product);
    console.log(product);
  }
  if (req.query.name) {
    const name = req.query.name;
    const product = products.filter((p) => p.name === name);
    res.json(product);
  }
  if (req.query.price) {
    const price = req.query.price;
    const product = products.filter((product) => product.price === price);
    res.json(product);
  }
  res.status(200).json(products);
});

router.post("/products",(req, res) => {
  const data = req.body;
  const category = req.body.category;
  const price = req.body.price;
  const name = req.body.name;
  validate(name, price, category);
  products.push(data);
  res.status(201).json(products);
});

router.get("/products/:id",(req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p._id === id);
  res.json(product);
});


export default router;