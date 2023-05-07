import { useState } from "react";
import Menu from "./Menu";

interface Props {
  list: String[];
}

function FindFood({ list }: Props) {
  const [option, setOption] = useState(0);
  const foodList = list.map((items, index) => (
    <button
      className={
        option === index
          ? "border border-black rounded-lg px-2 py-0.5 bg-black text-white duration-300"
          : "border border-black rounded-lg px-2 py-0.5 hover:bg-black hover:text-white duration-300"
      }
      onClick={(items) => setOption(index)}
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

export default FindFood;
