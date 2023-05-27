import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

let foodList = [
  { type: "Fruits", name: "Apple", price: 1.99 },
  { type: "Vegetables", name: "Carrot", price: 0.99 },
  { type: "Meats", name: "Chicken", price: 4.99 },
  { type: "Meats", name: "Beef", price: 5.99 },
  { type: "Meats", name: "Pork", price: 3.99 },
  { type: "Meats", name: "Lamb", price: 6.99 },
  { type: "Meats", name: "Turkey", price: 4.99 },
  { type: "Meats", name: "Duck", price: 7.99 },
  { type: "Fruits", name: "Banana", price: 1.99 },
  { type: "Fruits", name: "Orange", price: 1.99 },
  { type: "Fruits", name: "Grape", price: 2.99 },
  { type: "Vegetables", name: "Potato", price: 0.99 },
  { type: "Vegetables", name: "Tomato", price: 1.99 },
  { type: "Drinks", name: "Coke", price: 4.99 },
  { type: "Drinks", name: "Pepsi", price: 4.99 },
  { type: "Drinks", name: "Sprite", price: 4.99 },
  { type: "Drinks", name: "Fanta", price: 4.99 },
  { type: "Drinks", name: "Mountain Dew", price: 4.99 },
  { type: "Fruits", name: "Watermelon", price: 5.99 },
  { type: "Fruits", name: "Pineapple", price: 3.99 },
  { type: "Fruits", name: "Mango", price: 2.99 },
  { type: "Fruits", name: "Strawberry", price: 2.99 },
  { type: "Vegetables", name: "Cucumber", price: 1.99 },
  { type: "Vegetables", name: "Onion", price: 0.99 },
  { type: "Meats", name: "Salmon", price: 7.99 },
  { type: "Meats", name: "Tuna", price: 6.99 },
  { type: "Vegetables", name: "Broccoli", price: 1.99 },
  { type: "Vegetables", name: "Cabbage", price: 1.99 },
  { type: "Vegetables", name: "Spinach", price: 1.99 },
  { type: "Vegetables", name: "Lettuce", price: 1.99 },
  { type: "Vegetables", name: "Pepper", price: 1.99 },
];

let cart = [];

app.get("/meats", (req, res) => {
  res.send(foodList.filter((food) => food.type === "Meats"));
});

app.get("/vegetables", (req, res) => {
  res.send(foodList.filter((food) => food.type === "Vegetables"));
});

app.get("/fruits", (req, res) => {
  res.send(foodList.filter((food) => food.type === "Fruits"));
});

app.get("/drinks", (req, res) => {
  res.send(foodList.filter((food) => food.type === "Drinks"));
});

app.get("/cart", (req, res) => {
  res.send(cart);
});

app.post("/additem", (req, res) => {
  cart.push(req.body);
  res.send("Successfully added item to cart!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port " + port + "!");
});
