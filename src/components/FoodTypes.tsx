interface Props {
  list: String[];
}

function FoodTypes({ list }: Props) {
  const foodList = list.map((items) => (
    <button className="border border-black rounded-lg px-2 py-0.5 hover:bg-black hover:text-white duration-300">
      {items}
    </button>
  ));

  return (
    <>
      <div className="mt-4 flex gap-5 ml-2">{foodList}</div>
    </>
  );
}

export default FoodTypes;
