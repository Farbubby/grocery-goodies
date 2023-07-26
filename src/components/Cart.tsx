import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/functions";

interface Props {
  state: boolean;
  close: () => void;
}

function Cart({ state, close }: Props) {
  let toggle = state
    ? " translate-x-0 duration-300"
    : " translate-x-full duration-300";

  const query = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(),
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError)
    return <div>An error has occurred: {JSON.stringify(query.error)}</div>;

  const list = query.data.map((item: any) => (
    <div>
      {item.name} x{item.amount} - ${(item.price * item.amount).toFixed(2)}
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
        <div className="flex flex-col justify-center items-center gap-4">{list}</div>
      </div>
    </>
  );
}

export default Cart;
