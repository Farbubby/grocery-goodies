import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import FindFood from "./components/FindFood";

function App() {
  const choices = ["Home", "About", "Find", "Cart"];
  const foods = ["Meats", "Vegetables", "Fruits", "Drinks"];
  return (
    <div className="font-mono">
      <Navbar list={choices} />
      <FindFood list={foods} />
    </div>
  );
}

export default App;
