// Importing Module
// import { addToCart, totalPrice as price, totalQTY } from "./shoppingCart.js";

console.log("Importing Module");
// addToCart("IPhone", 3);
// console.log(price, totalQTY);

import * as Shop from "./shoppingCart.js";
Shop.addToCart("MacBook", 2);
console.log(Shop.totalPrice, Shop.totalQTY);
