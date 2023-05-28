import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getList, getCart, addToCart } from "../api/functions";

interface Props {
  type: string;
}

function FoodList({ type }: Props) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["food", type],
    queryFn: () => getList(type),
  });

  const mutation = useMutation({
    mutationFn: (data: any) => addToCart(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError)
    return <div>An error has occurred: {JSON.stringify(query.error)}</div>;

  const list = query.data.map((item: any) => (
    <div
      className="flex flex-col p-1 border border-black transition ease-in-out hover:scale-105 hover:shadow-lg rounded-lg w-48 text-center"
      key={item.name}>
      {item.name} - ${item.price}
      <div className="flex flex-row justify-center gap-4">
        <button
          className="border border-black h-6 w-6 hover:bg-black hover:text-white duration-300"
          onClick={() => mutation.mutate(item)}>
          +
        </button>
        <button className="border border-black h-6 w-6 hover:bg-black hover:text-white duration-300">
          -
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="grid grid-cols-4 gap-y-4 gap-x-10 w-max">{list}</div>
    </>
  );
}

export default FoodList;
