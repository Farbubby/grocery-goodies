export function getList(type: string) {
  return fetch(
    `http://localhost:3000/getfoodlist?type=${type.toLowerCase()}`
  ).then((res) => res.json());
}

export function getCart() {
  return fetch("http://localhost:3000/getcart").then((res) => res.json());
}

export function createItem(data: any) {
  return fetch("http://localhost:3000/createitem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => console.log(res));
}

export function deleteItem(data: any) {
  return fetch("http://localhost:3000/deleteitem", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => console.log(res));
}

export function updateItem(data: { name: string; amount: number }) {
  return fetch("http://localhost:3000/updateitem", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: data.name, amount: data.amount }),
  }).then((res) => console.log(res));
}
