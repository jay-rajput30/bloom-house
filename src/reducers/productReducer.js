export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };
    case "REMOVE_TO_CART": {
      const filteredCartProducts = state.cart?.filter(
        (item) => item.id !== payload.id
      );
      return { ...state, cart: filteredCartProducts };
    }
    case "ADD_TO_WISHLIST": {
      if (!state.wishlist.find((item) => item.id === payload.id)) {
        return { ...state, wishlist: [...state.wishlist, payload] };
      }
    }

    case "REMOVE_FROM_WISHLIST": {
      const filteredWishlistProducts = state?.wishlist.filter(
        (item) => item.id !== payload.id
      );
      console.log("remove wishlist reducer called");
      return { ...state, wishlist: filteredWishlistProducts };
    }
    default:
      return state;
  }
};
