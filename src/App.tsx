import Navbar from "./components/Navbar";
import FindFood from "./components/FindFood";
import Home from "./components/Home";

function App() {
  const choices = ["Home", "Find", "Cart"];
  const foods = ["Meats", "Vegetables", "Fruits", "Drinks"];
  return (
    <div className="font-mono">
      <Navbar list={choices} />
      <Home />
    </div>
  );
}

export default App;
