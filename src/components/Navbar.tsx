interface Props {
  list: String[];
}

function Navbar({ list }: Props) {
  const navbarList = list.map((items) => (
    <button className="hover:text-white duration-300">{items}</button>
  ));
  return (
    <>
      <div className="flex flex-row w-full h-14 bg-red-400 border-b border-black">
        <div className="flex flex-row p-2 w-14 text-2xl font-bold items-center gap-x-2 mr-auto">
          <img src="./src/assets/logo.webp" alt="Logo"></img>
          Store
        </div>
        <div className="flex flex-row h-14 font-white font-bold items-center gap-x-9 mr-20">
          {navbarList}
        </div>
      </div>
    </>
  );
}

export default Navbar;
