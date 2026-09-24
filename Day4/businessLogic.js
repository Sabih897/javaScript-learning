export function generateReport(products) {
  let totalValue = 0,
    totalProducts = 0,
    totalQuantity = 0;
  products.forEach((el) => {
    totalProducts++;
    totalQuantity += el.quantity;
    totalValue += el.price* el.quantity;
  });
  return {totalProducts, totalQuantity, totalValue};
}
