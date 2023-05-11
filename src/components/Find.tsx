import FoodSelection from "./FoodSelection";

function Find() {
  const foods = ["Meats", "Vegetables", "Fruits", "Drinks"];
  return (
    <>
      <FoodSelection list={foods} />
    </>
  );
}

export default Find;
