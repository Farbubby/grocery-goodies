import { useState } from "react";
import FoodList from "./FoodList";
import TypeButton from "./TypeButton";

function FoodSelection() {
  const list = ["All", "Meats", "Vegetables", "Fruits", "Drinks"];
  const [option, setOption] = useState("All");

  const typeList = list.map((itemType) => (
    <TypeButton itemType={itemType} state={option} setState={setOption} />
  ));

  return (
    <>
      <div className="mt-4 flex flex-row gap-5 ml-2">{typeList}</div>
      <div className="flex flex-row justify-center align-center mt-8 text-4xl font-bold">
        {option}
      </div>
      <div className="flex flex-row ml-2 mt-8 justify-center">
        <FoodList type={option} />
      </div>
    </>
  );
}

export default FoodSelection;
