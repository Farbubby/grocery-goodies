import Menu from "./Menu"

interface Props {
  list: String[];
}

function FoodTypes({ list }: Props) {
  const foodList = list.map((items) => (
    <button className="border border-black rounded-lg px-2 py-0.5 hover:bg-black hover:text-white duration-300">
      {items}
    </button>
  ));
  const meat = ['Chicken', '$12.00', 'Beef', '$15.00'];

  return (
    <>
      <div className="mt-4 flex gap-5 ml-2">{foodList}</div>
      <Menu list={meat}/>
    </>
  );
}

export default FoodTypes;
