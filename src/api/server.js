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

app.get("/getfoodlist", (req, res) => {
  if (req.query.type.toLowerCase() === "all") {
    res.send(foodList);
    return;
  }

  res.send(
    foodList.filter(
      (item) => item.type.toLowerCase() === req.query.type.toLowerCase()
    )
  );
});

app.get("/getcart", (req, res) => {
  res.send(cart);
});

app.post("/additem", (req, res) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === req.body.name.toLowerCase()) {
      cart[i].amount++;
      res.send(cart);
      return;
    }
  }

  req.body.amount = 1;
  cart.push(req.body);

  res.send(cart);
});

app.delete("/removeitem", (req, res) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === req.body.name.toLowerCase()) {
      if (cart[i].amount > 1) {
        cart[i].amount--;
      } else {
        cart.splice(i, 1);
      }
      break;
    }
  }

  res.send(cart);
});

app.delete("/deleteitem", (req, res) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === req.body.name.toLowerCase()) {
      cart.splice(i, 1);
      break;
    }
  }

  res.send(cart);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port " + port + "!");
});
