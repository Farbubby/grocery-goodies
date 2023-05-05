import { useState } from "react";
import Menu from "./Menu";

interface Props {
  list: String[];
}

function FindFood({ list }: Props) {
  const [option, setOption] = useState(0);
  const foodList = list.map((items, index) => (
    <button className={option === index ? "border border-black rounded-lg px-2 py-0.5 bg-black text-white duration-300" : "border border-black rounded-lg px-2 py-0.5 hover:bg-black hover:text-white duration-300"} 
    onClick={(items) => setOption(index)}>
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
      {option === 0 && <Menu list={meats} />}
      {option === 1 && <Menu list={vegetables} />}
      {option === 2 && <Menu list={fruits} />}
      {option === 3 && <Menu list={drinks} />}
    </>
  );
}

export default FindFood;
