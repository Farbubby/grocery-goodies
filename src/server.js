import express from "express";
const app = express();

let foodList = [
  { type: "Fruit", name: "Apple", price: 1.99 },
  { type: "Vegetable", name: "Carrot", price: 0.99 },
  { type: "Meat", name: "Chicken", price: 4.99 },
  { type: "Meat", name: "Beef", price: 5.99 },
  { type: "Meat", name: "Pork", price: 3.99 },
  { type: "Meat", name: "Lamb", price: 6.99 },
  { type: "Meat", name: "Turkey", price: 4.99 },
  { type: "Meat", name: "Duck", price: 7.99 },
  { type: "Fruit", name: "Banana", price: 1.99 },
  { type: "Fruit", name: "Orange", price: 1.99 },
  { type: "Fruit", name: "Grape", price: 2.99 },
  { type: "Vegetable", name: "Potato", price: 0.99 },
  { type: "Vegetable", name: "Tomato", price: 1.99 },
];

app.get("/", (req, res) => {
  res.send(foodList.filter((food) => food.type === "Meat"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port " + port + "!");
});
