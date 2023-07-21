import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/functions";

function Cart() {
  const query = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(),
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError)
    return <div>An error has occurred: {JSON.stringify(query.error)}</div>;

  const list = query.data.map((item: any) => <div key="ok"> {item.name} {item.amount} </div>);

  return (
    <>
      <div> {list} </div>
    </>
  );
}

export default Cart;
