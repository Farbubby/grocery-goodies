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

  const list = data.map((item: any) => <div key={item.name}>{item.name}</div>);

  return <>{list}</>;
}

export default FoodList;
