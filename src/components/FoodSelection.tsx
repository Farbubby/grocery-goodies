import { useState } from "react";

interface Props {
  list: string[];
}

function FoodSelection({ list }: Props) {
  const foodList = list.map((items) => (
    <a
      href={"/find/" + items.toLowerCase()}
      className={
        "border border-black rounded-lg px-2 py-0.5 duration-300 hover:bg-black hover:text-white"
      }
    >
      {items}
    </a>
  ));

  return (
    <>
      <div className="mt-4 flex flex-row gap-5 ml-2">{foodList}</div>
    </>
  );
}

export default FoodSelection;
