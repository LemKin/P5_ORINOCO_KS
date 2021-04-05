const request = async (url, init) => {
  let response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  let data = await response.json();
  return data;
};

const getPanier = () => {
  let panier = JSON.parse(localStorage.getItem("panier"));
  if (panier === null) {
    panier = [];
  }
  return panier;
};

const setPanier = (panier) => {
  localStorage.setItem("panier", JSON.stringify(panier));
};

const viderPanier = () => {
  localStorage.removeItem("panier");
};

const getOrder = () => {
  let order = localStorage.getItem("orderId");
  return order;
};
