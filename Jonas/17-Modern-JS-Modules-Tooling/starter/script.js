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

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return data;
// };

// const data = getLastPost();
// data.then((posts) => console.log(posts));

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", qty: 3 },
    { product: "pizza", qty: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

if (state.user.loggedIn) console.log("TRUEE");
else console.log("FALSEE");
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(state);
console.log(stateClone);

console.log(stateDeepClone);

// Prevent reloading the page to reserve state
if (module.hot) {
  module.hot.accept();
}
