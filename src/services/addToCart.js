export function addProduct(product){
  let cart = [];
  let cartQuantity = 0;
  try{
    if(!localStorage.getItem('cart')){
      cart = [{...product, date: Date.now()}];
    }
    else if(localStorage.getItem('cart')){
      cart = [ {...product, date: Date.now()}, ...JSON.parse(localStorage.getItem('cart')) ]     
    }
    cartQuantity = cart.length;
    cart = JSON.stringify(cart);
    localStorage.setItem('cart', cart);
    return cartQuantity;
  }
  catch(e){
    return e;
  }
}