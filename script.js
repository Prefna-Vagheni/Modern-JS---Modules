// importing module
// import { addToCart, totalPrice as price, totalQuantity  } from './shoppingCart.js';

// addToCart('Bread', 2);
// console.log(price, totalQuantity);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Pizza', 4);
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('Spaghetti', 4);
add('bread', 4);
add('pasta', 2);
add('mellon', 1);

console.log(cart);

// async function x() {}
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();

// console.log(data);
// console.log('Something');

/*const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

console.log(lastPost);

// Not very clean
// lastPost.then(res => console.log(res));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart.`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('PineApple', 8);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/
