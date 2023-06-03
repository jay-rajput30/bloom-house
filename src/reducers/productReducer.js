export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: payload };

    case "LOAD_WISHLIST": {
      const updateWishlist = payload.map((item) =>
        state.products?.find((productItem) => productItem.id === item)
      );
      return { ...state, wishlist: updateWishlist };
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

      return { ...state, wishlist: filteredWishlistProducts };
    }
    default:
      return state;
  }
};
