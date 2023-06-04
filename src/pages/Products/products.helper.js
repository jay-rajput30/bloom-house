export const sortProductByPrice = (selectedPrice, products) => {
  if (selectedPrice === "") return products;
  if (selectedPrice === "High to Low") {
    return ratingFilteredProducts?.sort((a, b) => b.price - a.price);
  } else {
    return ratingFilteredProducts?.sort((a, b) => a.price - b.price);
  }
};
