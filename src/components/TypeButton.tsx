import { useState } from "react";

interface Props {
  itemType: string;
  state: string;
  setState: (itemType: string) => void;
}

function TypeSelection({ itemType, state, setState }: Props) {
  const str = "border-2 border-black rounded-lg px-2 py-0.5 duration-300 ";

  return (
    <>
      <button
        className={
          itemType === state
            ? str + "bg-black text-white"
            : str + "hover:bg-black hover:text-white"
        }
        key={itemType}
        onClick={() => setState(itemType)}>
        {itemType}
      </button>
    </>
  );
}

export default TypeSelection;
