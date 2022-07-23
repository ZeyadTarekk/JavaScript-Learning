// Exporting Module
console.log("Exporting Module");

const shoppingCost = 10;
const cart = [];

export const addToCart = function (product, qty) {
  cart.push({ product, qty });
  console.log(`${qty} ${product} added to cart`);
};

const totalPrice = 237;
const totalQTY = 23;
export { totalPrice, totalQTY };
