import FoodSelection from "./FoodSelection";
import FoodList from "./FoodList";

function Find() {
  const foods = ["Meats", "Vegetables", "Fruits", "Drinks"];
  return (
    <>
      <FoodSelection list={foods} />
    </>
  );
}

export default Find;
