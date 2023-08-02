import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteItem,
  addItem,
  removeItem,
  updateAmount,
} from "../api/functions";

interface Props {
  item: {
    type: string;
    name: string;
    price: number;
    amount: number;
  };
}

function CartItem({ item }: Props) {
  const [amount, setAmount] = useState(item.amount);

  const buttonCSS =
    " px-2 border border-green-300 rounded-full hover:text-black hover:bg-green-300 duration-200";

  const queryClient = useQueryClient();

  const addOne = useMutation({
    mutationFn: (data: any) => addItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const update = useMutation({
    mutationFn: (data: any) => updateAmount(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const removeOne = useMutation({
    mutationFn: (data: any) => removeItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const remove = useMutation({
    mutationFn: (data: any) => deleteItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  return (
    <div className="flex flex-row gap-4">
      <button onClick={() => remove.mutate(item)}>X</button>
      <div className="flex flex-col px-4 py-2 border-l border-green-300 gap-2">
        <div className="flex flex-row gap-24 max-w-xl border-b border-green-300 pb-1">
          <div className="flex flex-col">
            <div>{item.name}</div>
            <div>x{item.amount}</div>
          </div>
          <div>${(item.price * item.amount).toFixed(2)}</div>
        </div>
        <div className="flex flex-row gap-4">
          <form className="flex flex-row gap-2">
            <label>Amount:</label>
            <input
              type="number"
              min="1"
              max="99999"
              className="border border-green-300 bg-black w-20 rounded-lg px-2"
              onChange={(e) => {
                e.preventDefault();
                const amounts = parseInt(e.target.value);

                if (amounts > 0 && amounts <= 99999) setAmount(amounts);
              }}
            />
            <input
              type="submit"
              value="Update"
              onClick={() => update.mutate({ name: item.name, amount: amount })}
            />
          </form>
        </div>
        <div className="flex flex-row gap-2">
          <button className={buttonCSS} onClick={() => addOne.mutate(item)}>
            +
          </button>
          <button className={buttonCSS} onClick={() => removeOne.mutate(item)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
