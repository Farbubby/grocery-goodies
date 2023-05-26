import { useState } from "react";
import FoodList from "./FoodList";

interface Props {
  list: string[];
}

function FoodSelection({ list }: Props) {
  const [option, setOption] = useState("Meats");
  const str = "border border-black rounded-lg px-2 py-0.5 duration-300 ";
  const foodList = list.map((items) => (
    <button
      className={
        items === option
          ? str + "bg-black text-white"
          : str + "hover:bg-black hover:text-white"
      }
      key={items}
      onClick={() => setOption(items)}>
      {items}
    </button>
  ));

  return (
    <>
      <div className="mt-4 flex flex-row gap-5 ml-2">
        {foodList}
      </div>
      <div className="flex flex-row justify-center align-center mt-8 text-4xl font-bold">{option}</div>
      <div className="flex flex-row ml-2 mt-8 justify-center">
        <FoodList type={option} />
      </div>
    </>
  );
}

export default FoodSelection;
