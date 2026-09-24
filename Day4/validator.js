export function validateProducts(products) {
  let valid = true;
  products.forEach((product) => {
    if (product.id && product.name && product.price && product.quantity) {
      if (
        typeof product.price !== "number" ||
        typeof product.quantity !== "number"
      ) {
        valid = false;
      }
    } else {
      valid = false;
    }
  });
  return valid;
}
