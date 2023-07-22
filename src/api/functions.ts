export function getList(type: string) {
  return fetch(
    `http://localhost:3000/getfoodlist?type=${type.toLowerCase()}`
  ).then((res) => res.json());
}

export function getCart() {
  return fetch("http://localhost:3000/getcart").then((res) => res.json());
}

export function addItem(data: any) {
  return fetch("http://localhost:3000/additem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => console.log(res));
}

export function removeItem(data: any) {
  return fetch("http://localhost:3000/removeitem", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => console.log(res));
}