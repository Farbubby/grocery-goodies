import Navbar from "./components/Navbar";
import FoodSelection from "./components/FoodSelection";
import Home from "./components/Home";

function App() {
  const choices = ["Home", "Find", "Cart"];
  const foods = ["Meats", "Vegetables", "Fruits", "Drinks"];
  return (
    <div className="font-mono">
      <Navbar />
    </div>
  );
}

export default App;
