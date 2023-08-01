import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createItem } from "../api/functions";

interface Props {
  item: {
    type: string;
    name: string;
    price: number;
  };
}

function StoreItem({ item }: Props) {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: (item: any) => createItem(item),
    onSuccess: () => queryClient.invalidateQueries(["cart"]),
  });

  return (
    <div
      className="flex flex-col px-1 py-2 gap-1 border-2 border-black transition ease-in-out hover:scale-105 hover:shadow-lg rounded-lg w-48 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300 to-gray-600"
      key={item.name}>
      <div>{item.name}</div>
      <div>${item.price}</div>
      <div className="flex flex-row justify-center gap-4">
        <button
          className="border-2 border-black rounded-lg px-2 hover:bg-orange-300 duration-300"
          onClick={() => create.mutate(item)}>
          Add item
        </button>
      </div>
    </div>
  );
}

export default StoreItem;
