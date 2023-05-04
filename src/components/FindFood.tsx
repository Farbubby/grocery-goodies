import { useState } from "react";
import Menu from "./Menu";

interface Props {
  list: String[];
}

function FindFood({ list }: Props) {
  const [option, setOption] = useState("");
  const foodList = list.map((items) => (
    <button className="border border-black rounded-lg px-2 py-0.5 hover:bg-black hover:text-white duration-300" 
    onClick={(items) => setOption("ok")}>
      {items}
    </button>
  ));
  const meats = ["Chicken", "$12.00", "Beef", "$15.00"];
  const vegetables = ["Potato", "$1.50", "Pepper", "$2.00"];
  const fruits = ["Apple", "$5.00", "Orange", "$3.00"];
  const drinks = ["Sprite", "$7.25", "Coke", "$8.00"];

  return (
    <>
      <div className="mt-4 flex gap-5 ml-2">{foodList}</div>
      <Menu list={drinks} />
    </>
  );
}

export default FindFood;
