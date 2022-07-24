// Importing Module
// import { addToCart, totalPrice as price, totalQTY } from "./shoppingCart.js";

import zeyad from "./shoppingCart.js";

console.log("Importing Module");
// addToCart("IPhone", 3);
// console.log(price, totalQTY);

import * as Shop from "./shoppingCart.js";
Shop.addToCart("MacBook", 2);
Shop.addToCart("Pizza", 4);
Shop.addToCart("Protein", 6);
console.log(Shop.totalPrice, Shop.totalQTY);
zeyad();

console.log(Shop.cart);

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const data = getLastPost();
data.then((posts) => console.log(posts));
