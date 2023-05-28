export function getList(type: string) {
  return fetch(`http://localhost:3000/getfood?type=${type.toLowerCase()}`).then(
    (res) => res.json()
  );
}

export function getCart() {
  return fetch("http://localhost:3000/getcart").then((res) => res.json());
}

export function addToCart(data: any) {
  return fetch("http://localhost:3000/additem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => console.log(res));
}
