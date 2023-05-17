import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

function FoodList() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GetList />
      </QueryClientProvider>
    </>
  );
}

export function GetList() {
  const { isLoading, error, data } = useQuery("list", () =>
    fetch("http://localhost:3000").then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: </div>;

  const list = data.map((item: any) => <div key={item.name}>{item.name}</div>);

  return (
    <>
      {list}
    </>
  );
}

export default FoodList;
