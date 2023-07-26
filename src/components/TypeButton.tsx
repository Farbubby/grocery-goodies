import { useState } from "react";

interface Props {
  itemType: string;
  state: string;
  setState: (itemType: string) => void;
}

function TypeButton({ itemType, state, setState }: Props) {
  const str = "text-green-300 border-green-300 rounded-lg px-2 py-0.5 duration-300 border shadow-lg";

  return (
    <>
      <button
        className={
          itemType === state
            ? str + " bg-green-300 text-gray-800"
            : str + " hover:bg-green-300 hover:text-black"
        }
        key={itemType}
        onClick={() => setState(itemType)}>
        {itemType}
      </button>
    </>
  );
}

export default TypeButton;
