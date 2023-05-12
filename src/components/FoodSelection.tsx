import { useState } from "react";

interface Props {
  list: String[];
}

function FoodSelection({ list }: Props) {
  const [option, setOption] = useState(0);
  let str = "border border-black rounded-lg px-2 py-0.5 duration-300";
  const foodList = list.map((items, index) => (
    <button
      className={
        option === index
          ? str.concat(" bg-black text-white")
          : str.concat(" hover:bg-black hover:text-white")
      }
      onClick={() => setOption(index)}
    >
      {items}
    </button>
  ));

  return (
    <>
      <div className="mt-4 flex gap-5 ml-2">{foodList}</div>
    </>
  );
}

export default FoodSelection;
