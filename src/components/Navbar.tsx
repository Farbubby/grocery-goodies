import { Link } from "@tanstack/router";
import Cart from "./Cart";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex flex-row w-full h-14 shadow-lg text-green-300 fixed items-center backdrop-blur">
        <div className="flex flex-row w-14 text-2xl font-bold items-center gap-x-2 mr-auto px-4">
          Store
        </div>
        <div className="flex flex-row font-white font-bold items-center gap-x-9 mr-20">
          <a href="/" className="hover:text-white duration-300">
            Home
          </a>
          <a href="/find" className="hover:text-white duration-300">
            Find
          </a>
          <button
            className="hover:text-white duration-300"
            onClick={() => setToggle(true)}>
            Cart
          </button>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <Cart state={toggle} close={() => setToggle(false)} />
      </div>
    </>
  );
}

export default Navbar;
