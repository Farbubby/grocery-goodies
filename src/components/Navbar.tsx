import { Link } from "@tanstack/router";

function Navbar() {
  return (
    <>
      <div className="flex flex-row w-full h-14 border-orange-300 shadow-lg text-green-300">
        <div className="flex flex-row w-14 text-2xl font-bold items-center gap-x-2 mr-auto px-4">
          Store
        </div>
        <div className="flex flex-row h-14 font-white font-bold items-center gap-x-9 mr-20">
          <a href="/" className="hover:text-white duration-300">
            Home
          </a>
          <a href="/find" className="hover:text-white duration-300">
            Find
          </a>
          <a href="/cart" className="hover:text-white duration-300">Cart</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
