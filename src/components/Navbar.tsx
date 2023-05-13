import { Link } from "@tanstack/router";

function Navbar() {
  return (
    <>
      <div className="flex flex-row w-full h-14 bg-red-400 border-b border-black">
        <div className="flex flex-row p-2 w-14 text-2xl font-bold items-center gap-x-2 mr-auto">
          <img src="/src/assets/logo.webp" alt="Logo"></img>
          Store
        </div>
        <div className="flex flex-row h-14 font-white font-bold items-center gap-x-9 mr-20">
          <a href="/" className="hover:text-white duration-300">
            Home
          </a>
          <a href="/food" className="hover:text-white duration-300">
            Find
          </a>
          <button className="hover:text-white duration-300">Cart</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
