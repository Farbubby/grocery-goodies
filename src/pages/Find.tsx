import { useState } from "react";
import FoodList from "../components/FoodList";
import TypeButton from "../components/TypeButton";

function FoodSelection() {
  const list = ["All", "Meats", "Vegetables", "Fruits", "Drinks"];
  const [option, setOption] = useState("All");

  const typeList = list.map((itemType) => (
    <TypeButton itemType={itemType} state={option} setState={setOption} />
  ));

  return (
    <>
      <div className="py-20 flex flex-row gap-5 ml-2">{typeList}</div>
      <div className="flex flex-row justify-center align-center mt-4 text-4xl font-bold text-green-300">
        {option}
      </div>
      <div className="flex flex-row ml-2 mt-8 justify-center">
        <FoodList type={option} />
      </div>
    </>
  );
}

export default FoodSelection;
