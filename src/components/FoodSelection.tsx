import { useState } from "react";

interface Props {
  list: string[];
}

function FoodSelection({ list }: Props) {
  const [option, setOption] = useState("Meats");
  let str = "border border-black rounded-lg px-2 py-0.5 duration-300";
  const foodList = list.map((items) => (
    <button
      className={
        option === items
          ? str.concat(" bg-black text-white")
          : str.concat(" hover:bg-black hover:text-white")
      }
      onClick={() => setOption(items)}
    >
      {items}
    </button>
  ));

  return (
    <>
      <div className="mt-4 flex flex-row gap-5 ml-2">{foodList}</div>
    </>
  );
}

export default FoodSelection;
