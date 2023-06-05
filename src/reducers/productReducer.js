export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: payload };

    default:
      return state;
  }
};
