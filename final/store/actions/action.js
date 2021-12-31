export function addToCart(productName) {
  return {
    type: "ADD_TO_CART",
    payload: productName,
  };
}
export function deleteFromCart(productName) {
  return {
    type: "DELETE_FROM_CART",
    payload: productName,
  };
}
