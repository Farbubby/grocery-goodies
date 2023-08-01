import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getList, getCart, createItem } from "../api/functions";
import StoreItem from "./StoreItem";

interface Props {
  type: string;
}

function FoodList({ type }: Props) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["food", type],
    queryFn: () => getList(type),
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError)
    return <div>An error has occurred: {JSON.stringify(query.error)}</div>;

  const list = query.data.map((item: any) => <StoreItem item={item} />);

  return (
    <>
      <div className="grid grid-cols-4 gap-y-4 gap-x-10 w-max">{list}</div>
    </>
  );
}

export default FoodList;
