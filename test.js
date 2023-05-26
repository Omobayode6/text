// function to add an item to cart

let cart = [];
const addToCart = () => {
  let products = {name: 'pen', price: 2}
  return cart.push(products)
  
}

console.log(addToCart())