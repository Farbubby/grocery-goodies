import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart, deleteItem, addItem, removeItem } from "../api/functions";

interface Props {
  state: boolean;
  close: () => void;
}

function Cart({ state, close }: Props) {
  const buttonCSS =
    " px-2 border border-green-300 rounded-full hover:text-black hover:bg-green-300 duration-200";

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
      <button onClick={() => remove.mutate(item)}>X</button>
      <div className="flex flex-col px-4 py-2 border-l border-green-300 gap-2">
        <div className="flex flex-row gap-24 max-w-xl border-b border-green-300 pb-1">
          <div className="flex flex-col">
            <div>{item.name}</div>
            <div>x{item.amount}</div>
          </div>
          <div>${(item.price * item.amount).toFixed(2)}</div>
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
        <div className="flex flex-col justify-center px-8 gap-4">{list}</div>
      </div>
    </>
  );
}

export default Cart;
