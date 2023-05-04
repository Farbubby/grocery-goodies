interface Props {
  product: String;
  price: String;
}

function Card({ product, price }: Props) {
  return (
    <>
      <div className="flex h-52 w-72 p-1 items-center border rounded border-black hover:shadow-lg">
        <div className="h-44 w-32 ml-2 border border-black"></div>
        <div className="ml-11 items-center flex-col font-bold">
          <div className="text-center">{product}</div>
          <div className="text-center">{price}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
