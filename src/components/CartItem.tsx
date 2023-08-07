import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateItem, deleteItem } from "../api/functions";
import { useState } from "react";

interface Props {
  item: {
    type: string;
    name: string;
    price: number;
    amount: number;
  };
}

function CartItem({ item }: Props) {
  const buttonCSS =
    " px-2 border border-green-300 rounded-full hover:text-black hover:bg-green-300 duration-200";

  const [amount, setAmount] = useState(1);

  const queryClient = useQueryClient();

  const update = useMutation({
    mutationFn: (data: { name: string; amount: number }) => updateItem(data),
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
      <div className="flex flex-col px-4 py-4 border border-green-300 rounded-xl gap-2">
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
              id={item.name + "amount"}
              type="number"
              min="1"
              max="99999"
              maxLength={5}
              className="border border-green-300 bg-gray-900 w-28 rounded-lg px-2"
              onChange={(e) => {
                e.preventDefault();
                setAmount(parseInt(e.target.value));
              }}
            />
            <input
              type="submit"
              value="Update"
              onClick={() => {
                if (amount > 0 && amount <= 99999)
                  update.mutate({ name: item.name, amount: amount });
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
