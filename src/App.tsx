import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Menu from "./components/Menu";
import FoodTypes from "./components/FoodTypes";

function App() {
  const choices = ["Home", "About", "Find", "Cart"];
  const foods = ["Meats", "Vegetables", "Fruits", "Drinks"];
  return (
    <div className="font-mono">
      <Navbar list={choices} />
      <FoodTypes list={foods} />
    </div>
  );
}

export default App;
