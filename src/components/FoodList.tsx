import { QueryClient, QueryClientProvider, useQuery } from "react-query";

interface Props {
  type: string;
}

const queryClient = new QueryClient();

function FoodList({ type }: Props) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GetList type={type} />
      </QueryClientProvider>
    </>
  );
}

export function GetList({ type }: { type: string }) {
  const { isLoading, error, data } = useQuery("list", () =>
    fetch("http://localhost:3000/" + type.toLowerCase()).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: </div>;

  const list = data.map((item: any) => (
    <div
      className="flex flex-col p-1 border border-black transition ease-in-out hover:scale-105 hover:shadow-lg rounded-lg w-48 text-center"
      key={item.name}>
      {item.name} - ${item.price}
      <div className="flex flex-row justify-center gap-4">
        <button className="border border-black h-6 w-6 hover:bg-black hover:text-white duration-300">+</button>
        <button className="border border-black h-6 w-6 hover:bg-black hover:text-white duration-300">-</button>
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
