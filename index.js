var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


//Use that passed-in string to create a new object representing the item
function addToCart(item) {
let price = Math.floor(Math.random()*100);
let newItem = {itemName: item, itemPrice: price};
cart.push(newItem);
return `${item} has been added to your cart.`
} 


function viewCart() {
  // write your code here
  var cartContents = [];
  var inYourCart = "In your cart, you have "
  
  if (cart.length===0) {
    return `Your shopping cart is empty.`
  }
  
  if (cart.length===1) {
   cartContents.push(`${cart[0].itemName} at $${cart[0].itemPrice}.`)
   return inYourCart+cartContents;
  }
  
  if (cart.length===2) {
   cartContents.push(`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
   return inYourCart+cartContents;
  }
  
  
 if (cart.length>2) {
   cartContents.push(`${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`)
   return inYourCart+cartContents;
  }
  
  
  
 
  
}

function total() {
  // write your code here
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
