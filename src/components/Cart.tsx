import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart, deleteItem, addItem, removeItem } from "../api/functions";

interface Props {
  state: boolean;
  close: () => void;
}

function Cart({ state, close }: Props) {
  const queryClient = useQueryClient();

  let toggle = state
    ? " translate-x-0 duration-300"
    : " translate-x-full duration-300";

  const query = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(),
  });

  const addOne = useMutation({
    mutationFn: (data: any) => addItem(data),
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

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError)
    return <div>An error has occurred: {JSON.stringify(query.error)}</div>;

  const list = query.data.map((item: any) => (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col border-r px-4 border-green-300 items-center">
        <div>
          {item.name} x{item.amount} - ${(item.price * item.amount).toFixed(2)}
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={() => addOne.mutate(item)}>+</button>
          <button onClick={() => removeOne.mutate(item)}>-</button>
        </div>
      </div>
      <button onClick={() => remove.mutate(item)}>X</button>
    </div>
  ));

  return (
    <>
      <div
        className={
          "flex flex-col fixed h-screen z-30 bg-gray-900 text-green-300 w-1/4 border-l border-green-300" +
          toggle
        }>
        <div className="flex flex-row-reverse p-8 text-xl mb-8">
          <button onClick={() => close()}>X</button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {list}
        </div>
      </div>
    </>
  );
}

export default Cart;
